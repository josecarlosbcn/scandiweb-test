import React, {Component} from "react";
import "../css/styles.css";


class Slider extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            slide: 0,
            audioOn: null,
            videoOn: null,
            loaded: false,
            x_start: 0,
            x_swipe: 0
        };
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount(){
        this.setState({
            loaded: true
        }, () => {
            let container = document.querySelector(".container");            
            container.style.maxWidth = this.props.width + "px";
            container.style.maxHeight = this.props.height + "px";
            let slider = document.querySelector(".slider");
            let leftButton = document.querySelector("#l-button");
            let rightButton = document.querySelector("#r-button");
            this.createElementsOfSlider(slider);
            slider.addEventListener("mousedown", (e) => {
                e.stopPropagation();
                this.setState({
                    x_start: e.x
                });
            });    
            slider.addEventListener("mouseup", (e) => {
                this.setState({
                    x_swipe: e.x - this.state.x_start
                });
                console.log("x_swipe: " + this.state.x_swipe);
                if (this.state.x_swipe < -125) this.moveToLeft();
                if (this.state.x_swipe > 125) this.moveToRight();
            });
            slider.addEventListener("touchstart", (e) => {
                this.setState({
                    x_start: e.targetTouches[0].clientX
                });
                console.log("touchstart x_start: " + this.state.x_start);
            });
            slider.addEventListener("touchmove", (e) => {
                let slider = document.querySelector(".slider");
                slider.style.transition = "all 0.1s ease-in-out";
                this.setState({
                    x_swipe: (e.targetTouches[0].clientX < this.state.x_start) ? e.targetTouches[0].clientX - this.state.x_start : e.targetTouches[0].clientX - this.state.x_start
                });
                //Don't swipe => only move a little bit to left or right but without swipe
                if (this.state.x_swipe > -125 && this.state.x_swipe < 0 && this.state.slide < this.props.list_elements.items.length - 1){    
                    slider.style.marginLeft = -(this.state.slide * 100) + (this.state.x_swipe/5) + "%";
                }
                if (this.state.x_swipe < 125 && this.state.x_swipe > 0 && this.state.slide > 0){
                    slider.style.marginLeft = -(this.state.slide * 100) + (this.state.x_swipe/5) + "%";
                }
            });
            slider.addEventListener("touchend", (e) => {
                if (this.state.x_swipe < -125) this.moveToLeft();
                if (this.state.x_swipe > 125) this.moveToRight();
                if (this.state.x_swipe >= -125 && this.state.x_swipe <= 125){
                    let slider = document.querySelector(".slider");
                    slider.style.transition = "all 0.1s ease-in-out";
                    slider.style.marginLeft = -(this.state.slide * 100) + "%";
                }
            });
            leftButton.addEventListener("click", (e) => {
                this.moveToRight();
            });
            rightButton.addEventListener("click", (e) => {
                this.moveToLeft();
            });
        });
    }

    /**
     * Create HTMLElement video 
     * 
     * @param {*} index 
     */
    createVideoTag(index){
        let videoTag = document.createElement("video");
        let list_elements = this.props.list_elements;

        let source = document.createElement("source");
        videoTag.id = "video" + index;
        videoTag.addEventListener("play", (e) => {
            console.log("Evento play fired!!!");
            console.log("Slide: " + this.state.slide);
            this.setState({
                videoOn: e.target.id
            }, () => {
                    //We check if there is a video in previous or next slide => We stop the reproduction
                    if (this.state.videoOn !== document.querySelector("#slide" + this.state.slide).children[0].id){
                        document.querySelector("#" + this.state.videoOn).pause();
                        this.setState({videoOn: null});
                    }
            });
        });          
        videoTag.style.width = 100 + "%";
        videoTag.style.height = this.props.height + "px";
        videoTag.controls = true;
        source.src = list_elements.items[index].src;
        if (typeof list_elements.items[index].type !== "undefined")
            source.type = list_elements.items[index].type;
        videoTag.appendChild(source);

        return videoTag;
    }

    /**
     * Create HTMLElement paragraph
     * 
     * @param {*} index 
     */
    createTitleTextAudio(index){
        let pTag = document.createElement("p");
        let list_elements = this.props.list_elements;

        pTag.style.position = "absolute";
        pTag.style.top = "0px";
        pTag.style.color = "#FFFFFF";
        pTag.style.paddingLeft = 10 + "px";
        pTag.style.fontSize = 12 + "pt";
        pTag.style.width = 100 + "%";
        pTag.style.height = 20 + "%";
        pTag.innerHTML = "<b>" + list_elements.items[index].artist + "</b> - " + list_elements.items[index].title;

        return pTag;
    }

    /**
     * Create HTMLElement audio
     * 
     * @param {*} index 
     */
    createAudioTag(index){
        let audioTag = document.createElement("audio");
        let list_elements = this.props.list_elements;

        audioTag.id = "audio" + index;
        audioTag.addEventListener("play", (e) => {
            this.setState({
                audioOn: e.target.id
            });
          //audioOn = e.target.id;
        });
        let source = document.createElement("source");
        audioTag.style.position = "absolute";
        audioTag.style.bottom = "0px";
        audioTag.style.width = 97 + "%";
        audioTag.style.height = 50 + "px";
        audioTag.style.paddingLeft = 10 + "px";
        audioTag.controls = true;
        source.src = list_elements.items[index].src;
        if (typeof list_elements.items[index].type !== "undefined")
            source.type = list_elements.items[index].type;
        audioTag.appendChild(source);

        return audioTag;
    }

    /**
     * Create HTMLElement image
     * 
     * @param {*} index 
     */
    createImageTag(index){
        let imageTag = document.createElement("img");
        let list_elements = this.props.list_elements;

        imageTag.src = list_elements.items[index].src;
        imageTag.className = list_elements.items[index].class;

        return imageTag;
    }

    /**
     * Create Multi Picture slide
     * 
     * @param {*} index 
     */
    createMultiPicture(index){
        let multiPicture = document.createElement("div");
        let list_elements = this.props.list_elements;
        //multiPicture.className = "multi-picture";
        multiPicture.style.display = "grid";
        multiPicture.style.height = "inherit";
        if (list_elements.items[index].pictures.length === 2){
            multiPicture.style.gridTemplateColumns = "repeat(2, 50%)";
            multiPicture.style.gridTemplateRows = "100%";
            for (let j = 0; j < list_elements.items[index].pictures.length; j++){
                let div2 = document.createElement("div");
                div2.style.maxHeight = 100 + "%";
                let image = document.createElement("img");
                image.src = list_elements.items[index].pictures[j];
                image.className = "image";
                div2.appendChild(image);
                multiPicture.appendChild(div2);
            }
        }
        if (list_elements.items[index].pictures.length === 3){
            multiPicture.style.gridTemplateColumns = "repeat(3, 33.3%)";
            multiPicture.style.gridTemplateRows = "100%";
            for (let j = 0; j < list_elements.items[index].pictures.length; j++){
                let div2 = document.createElement("div");
                div2.style.maxHeight = 100 + "%";
                let image = document.createElement("img");
                image.src = list_elements.items[index].pictures[j];
                image.className = "image";
                div2.appendChild(image);
                multiPicture.appendChild(div2);
            }
        }
        if (list_elements.items[index].pictures.length >= 4){
            let length = list_elements.items[index].pictures.length;
            multiPicture.style.gridTemplateColumns = "repeat(" + Math.ceil(Math.sqrt(length)) + ", "  + (100/Math.ceil(Math.sqrt(length))) + "%)";
            multiPicture.style.gridTemplateRows = "repeat(" + Math.ceil(Math.sqrt(length)) + ", "  + (100/Math.ceil(Math.sqrt(length))) + "%)";
            for (let j = 0; j < list_elements.items[index].pictures.length; j++){
                let div2 = document.createElement("div");
                if (list_elements.items[index].pictures[j].length > 0){
                    let image = document.createElement("img");
                    image.src = list_elements.items[index].pictures[j];
                    image.className = "image";
                    div2.appendChild(image);    
                }else{
                    div2.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                }
                div2.style.maxHeight = 100 + "%";
                multiPicture.appendChild(div2);
            }
        }        

        return multiPicture;
    }

    /**
     * We create all the slides of the carrousel
     * @param {*} slider 
     */
    createElementsOfSlider(slider){
        let list_elements = this.props.list_elements;
        slider.style.width = list_elements.items.length*100 + "%";
        console.log("Total elementos: " + list_elements.items.length);
        for (let i = 0; i < list_elements.items.length; i++) {
            let div = document.createElement("div");
            div.id = "slide" + i;
            //div.className = "slider-content";
            //div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.style.margin = 0;
            div.style.padding = 0;
            div.style.color = "#FFFFFF";
            div.style.fontSize = 72 + "pt";
            div.style.fontFamily = "Verdana";
            div.style.fontWeight = "bold";
            div.style.width = 100 + "%";
            div.style.height = "inherit";
            //Creating element inside div
            if (list_elements.items[i].tag === "text"){
                div.innerHTML = list_elements.items[i].src;
            }
            //let element = document.createElement(list_elements.items[i].tag);
            if (list_elements.items[i].tag === "video"){
                div.style.textAlign = "left";
                let videoTag = this.createVideoTag(i);
                div.appendChild(videoTag);
            }
            if (list_elements.items[i].tag === "audio"){
                div.style.textAlign = "left";
                let titleAudio = this.createTitleTextAudio(i);
                let audioTag = this.createAudioTag(i);
                div.appendChild(titleAudio);
                div.appendChild(audioTag);
            }
            if (list_elements.items[i].tag === "img"){
                let imageTag = this.createImageTag(i);
                div.append(imageTag);
            }
             if (list_elements.items[i].tag === "multi-picture"){
                let multiPicture = this.createMultiPicture(i);
                div.appendChild(multiPicture);
            }
            slider.appendChild(div);
        }  
    }

    goTo(event){
        if (event.keyCode === 13){
            let slideToGo = event.currentTarget.value;
            let list_elements = this.props.list_elements;
            console.log("slideToGo: " + slideToGo + " slide: " + this.state.slide);
            let layerError = document.querySelector(".error");
            let slider = document.querySelector(".slider");
            layerError.innerHTML = "";
            layerError.style.display = "none";
            //Stop video
            if (this.state.videoOn !== null){
                document.querySelector("#" + this.state.videoOn).pause();
                this.setState({videoOn: null});
            } 
            //Stop audio
            if (this.state.audioOn !== null){
                document.querySelector("#" + this.state.audioOn).pause();
                this.setState({audioOn: null});
            } 
            if ((slideToGo > 0) && (slideToGo <= list_elements.items.length)){
                console.log("Vamos a ... " + (slideToGo - 1));
                slider.style.transition = "all 0.5s ease-in-out";
                slider.style.marginLeft = -((slideToGo - 1) * 100) + "%";
                this.setState({
                    slide: slideToGo - 1,
                }, () => {
                    console.log("Estoy en: " + this.state.slide);
                });
            }else{
                layerError.style.display = "block";
                layerError.innerHTML = "Please, insert a number bewtween 1 and " + list_elements.items.length;
            }              
        }
    }

    /**
     * Move the slider one slide to the left
     */
    moveToLeft(){
        let slider = document.querySelector(".slider");
        if (this.state.slide < this.props.list_elements.items.length - 1){
            this.setState((state) => ({
                slide: state.slide + 1
            }));
          slider.style.transition = "all 1s ease-in-out";
          slider.style.marginLeft = -(this.state.slide * 100) + "%";
          if (this.state.audioOn !== null){
            document.querySelector("#" + this.state.audioOn).pause();
            this.setState({
                audioOn: null
            });
            //audioOn = null;
          }
          console.log("Move to the left");
          if (this.state.videoOn !== null){
            document.querySelector("#" + this.state.videoOn).pause();
            this.setState({
                videoOn: null
            });
            //videoOn = null;
          }
        }        
    }

    /**
     * Move the slider to the right
     */    
    moveToRight(){
        let slider = document.querySelector(".slider");
        if (this.state.slide > 0){
            this.setState((state) => ({
                slide: state.slide - 1
            }));
            slider.style.transition = "all 1s ease-in-out";
            slider.style.marginLeft = -(this.state.slide * 100) + "%";
            if (this.state.audioOn !== null){
                document.querySelector("#" + this.state.audioOn).pause();
                this.setState({audioOn: null});
                //audioOn = null;
            }
            if (this.state.videoOn !== null){
                document.querySelector("#" + this.state.videoOn).pause();
                this.setState({videoOn: null});
                //videoOn = null;
            }
        }        
    }

    render(){
        return(
            <div>                
                {
                    (this.state.loaded) ?
                        <div>
                            <div className = "container">
                                <div className = "slider"> 
                                </div>
                                <div className = "slider-button" id = "l-button" style = {{display: (this.state.slide > 0) ? "block" : "none"}}>&#60;</div>
                                <div className = "slider-button" id = "r-button" style = {{display: (this.state.slide < this.props.list_elements.items.length - 1) ? "block" : "none"}}>&#62;</div>
                            </div>
                            <div className = "error"></div>
                            <div className = "selector">
                                <div style = {{marginBottom: 5 + "px"}}>Slide: {this.state.slide + 1} / {this.props.list_elements.items.length}</div>
                                <div>Go to slide <input id = "selector" type = "text" placeholder = "Press enter to go ... " onKeyDown = {this.goTo} /> of {this.props.list_elements.items.length}</div>
                            </div>                                            
                        </div>
                    :
                    <h1>Loading data ...</h1>
                }
            </div>
        );
    }
}

module.exports.Slider = Slider;