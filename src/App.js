import React from 'react'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css';

const MyFlow = () => {
  const initialNode = [
    {
      id:'1',
      data: {label: "Parent Node"},
      type: "input",
      position :{x:0, y:0}
    },
    {
      id:'2',
      data: {label: "Child Node"},
      type: "output",
      position :{x:0, y:0}
    },
    {
      id:'3',
      data: {label: "default Node"},
      type: "default",
      position :{x:50, y:50}
    }
  ];
  const initialEdge = [{
    id:'e1-2',
    source: '1',
    target: '2',
    type: 'step',
    label: '1 to 2'
  }];
  return (
    <div className='w-full h-screen'>
      <ReactFlow
      defaultEdges={initialEdge}
      defaultNodes={initialNode}
      ></ReactFlow>
    </div>
  )
}
export default MyFlow;