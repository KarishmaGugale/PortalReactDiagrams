import React from "react";
import ReactDOM from "react-dom";
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DiagramWidget,
  DefaultLinkModel
} from "storm-react-diagrams";
import Popup from "reactjs-popup";

import "./styles.css";

const ElmArchitecture = () => {
  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel("code based feature toggles", "rgb(0,192,255)");
  let port1 = node1.addOutPort("Out");
  node1.setPosition(20, 100);

  //3-B) create another default node
  var node2 = new DefaultNodeModel("scm based feature toggles", "rgb(192,255,0)");
  let port2 = node2.addOutPort("Out");
  //let port3 = node2.addOutPort("Html");
  node2.setPosition(20, 200);

  //link1.addLabel("Hello World!");
  var node3 = new DefaultNodeModel("Ext feature toggle mangem", "rgb(0,192,255)");
  let port3=node3.addInPort("In"); 
  let port4=node3.addOutPort("Out");
  node3.setPosition(255, 150);

var node4 = new DefaultNodeModel("Centralised feature toogle framework", "rgb(192,255,0)"); 
  let port5=node4.addInPort("In");  
  let port6=node4.addOutPort("Out");
  node3.setPosition(499, 150);

var node5 = new DefaultNodeModel("Centralised feature toogle mange", "rgb(0,192,255)"); 
  let port7=node5.addInPort("In");   
  let port8=node5.addOutPort("Out");  
  node3.setPosition(930, 150);
  
  var node6 = new DefaultNodeModel("Audio Switching", "rgb(192,255,0)");   
  let port9=node6.addInPort("In");  
  node3.setPosition(1000, 150);

  let link1 = port1.link(port3);
  let link2 = port2.link(port3);
  let link3 = port4.link(port5);
  let link4 = port6.link(port7);
  let link5 = port8.link(port9);

    //4) add the models to the root graphs
    model.addAll(node1, node2, node3, node4, node5, node6, link1, link2, link3, link4, link5);

      node1.addListener({
     selectionChanged: function(e){
              // Do something here 
              //alert("Hi there");            
       console.log("Node:",e);
     },
    //  zoomUpdated: function(e){
    //   // Do something here
    //   console.log("Zoom:",e);
    //  },
});
  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};


function App() {
  return (    
    <div className="App"> 
      <ElmArchitecture />               
    </div>
    
    
  );
} 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//Separate Working Code for pop up 


// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     console.log("Props - ", props);
//     super(props);
//     this.state = {
//       modalVisible: false
//     };
//     this.openModal = this.openModal.bind(this);
//   }
//   openModal() {
//     console.log("Open modal called ", this.state.modalVisible);
//     const modalVisible = !this.state.modalVisible;
//     this.setState({
//       modalVisible
//     });
//   }
//   render() {
//     let styles = this.state.modalVisible
//       ? { display: "block" }
//       : { display: "none" };
//     return (
//       <div className="App">
//         <h1>Hello World</h1>
        
//         <button
//           type="button"
//           onClick={this.openModal}
//           className="btn btn-info btn-lg"
//         >
//           Open Modal
//         </button>
//         <div
//           id="myModal"
//           className="modal fade in"
//           role="dialog"
//           style={styles}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <button
//                   type="button"
//                   onClick={this.openModal}
//                   className="close"
//                 >
//                   &times;
//                 </button>
//                 <h4 className="modal-title">Modal Header</h4>
//               </div>
//               <div className="modal-body">
//                 <p>Some text in the modal.</p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   onClick={this.openModal}
//                   type="button"
//                   className="btn btn-default"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

