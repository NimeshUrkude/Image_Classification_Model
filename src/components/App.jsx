import React from "react";
import "./appstyle.css"
import lr from "./lr.png";
import cm from "./cm.png";
import f1 from "./f1.png";
import md from "./md.png";

import {AnimatePresence,motion} from "framer-motion";

function App() {
  return(
    <AnimatePresence>
      <motion.div className="e" initial={{opacity:0 , scale:0.5 , y:100}} animate={{opacity:1 , scale:1 , y:0}} transition={{duration:1}}>
        <h1>Tensorflow Model</h1>
        <p className="a">This is a Tensorflow Model of Image Recognition of Animal (Deer,Elephant,Giraffe,Lion,Yak) with 97.5% accuracy <a className="g" href="https://www.kaggle.com/datasets/rajathraghavendra/animal-image-recognition">Data set</a> is from Kaggel by Rajath Raghavendra
        </p>
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="c">
            <img alt="model" src={md}/>
            <p className="b">This Model is Made with Help of Data Augmentation and Resnet50</p>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="c">
            <img alt="Learning Rate" src={lr}/>
            <p className="b">This is graph of Loss vs Learning Rate. Best Learning Rate is about 1.25</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="c">
            <img alt="Confused Matrix" src={cm}/>
            <p className="b">This is Confused Matrix</p>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="c">
            <img alt="F1 Score" src={f1}/>
            <p className="b">This is F1 Score</p>
          </div>
          </div>
        </div>
        <a className="btn btn-dark" href="https://drive.google.com/file/d/15wj2qU0Azi3ELDQt_s-Xhns8S4IElz-_/view?usp=share_link">Link to Model</a>
        <p className="f">Live Image Prediction of model Comming soon !</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default App;
