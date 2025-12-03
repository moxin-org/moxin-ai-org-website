import React, { useState } from 'react';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {
        id: 'app',
        position: { x: 250, y: 0 },
        data: { label: 'Moly - Application', url: '/products/applications' },
        style: { background: '#FF2D55', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(255, 45, 85, 0.3)', cursor: 'pointer' },
    },
    {
        id: 'agents',
        position: { x: 250, y: 100 },
        data: { label: 'MoFA - Agents', url: '/products/agents' },
        style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(48, 176, 199, 0.3)', cursor: 'pointer' },
    },
    {
        id: 'models',
        position: { x: 250, y: 200 },
        data: { label: 'Moxin LM - Models', url: '/products/models' },
        style: { background: '#5E5CE6', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(94, 92, 230, 0.3)', cursor: 'pointer' },
    },
    {
        id: 'compute',
        position: { x: 250, y: 300 },
        data: { label: 'OminiX - Compute & Inference', url: '/products/compute' },
        style: { background: '#059669', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)', cursor: 'pointer' },
    },
];

const initialEdges = [
    { id: 'e1-2', source: 'app', target: 'agents', animated: true, style: { stroke: '#86868B' } },
    { id: 'e2-3', source: 'agents', target: 'models', animated: true, style: { stroke: '#86868B' } },
    { id: 'e3-4', source: 'models', target: 'compute', animated: true, style: { stroke: '#86868B' } },
];

export default function InteractiveStack() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodeClick = (event, node) => {
        if (node.data.url) {
            window.location.href = node.data.url;
        }
    };

    return (
        <div style={{ height: '400px', width: '100%', background: '#F5F5F7', borderRadius: '20px', border: '1px solid #D2D2D7' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeClick={onNodeClick}
                fitView
                attributionPosition="bottom-right"
                panOnScroll={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnDrag={false}
                preventScrolling={false}
            >
                <Background color="#D2D2D7" gap={16} />
            </ReactFlow>
        </div>
    );
}
