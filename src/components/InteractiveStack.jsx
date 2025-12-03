import React, { useState, useEffect } from 'react';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const getNodes = (lang) => {
    const isZh = lang === 'zh';
    return [
        {
            id: 'app',
            position: { x: 250, y: 0 },
            data: {
                label: isZh ? 'Moly - 应用' : 'Moly - Application',
                url: isZh ? '/zh/products/applications' : '/products/applications'
            },
            style: { background: '#FF2D55', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(255, 45, 85, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'agents',
            position: { x: 250, y: 100 },
            data: {
                label: isZh ? 'MoFA - 智能体' : 'MoFA - Agents',
                url: isZh ? '/zh/products/agents' : '/products/agents'
            },
            style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(48, 176, 199, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'models',
            position: { x: 250, y: 200 },
            data: {
                label: isZh ? 'Moxin LM - 模型' : 'Moxin LM - Models',
                url: isZh ? '/zh/products/models' : '/products/models'
            },
            style: { background: '#5E5CE6', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(94, 92, 230, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'compute',
            position: { x: 250, y: 300 },
            data: {
                label: isZh ? 'OminiX - 计算 & 推理' : 'OminiX - Compute & Inference',
                url: isZh ? '/zh/products/compute' : '/products/compute'
            },
            style: { background: '#059669', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)', cursor: 'pointer' },
        },
    ];
};

const initialEdges = [
    { id: 'e1-2', source: 'app', target: 'agents', animated: true, style: { stroke: '#86868B' } },
    { id: 'e2-3', source: 'agents', target: 'models', animated: true, style: { stroke: '#86868B' } },
    { id: 'e3-4', source: 'models', target: 'compute', animated: true, style: { stroke: '#86868B' } },
];

export default function InteractiveStack({ lang = 'en' }) {
    const [nodes, setNodes] = useState(getNodes(lang));
    const [edges, setEdges] = useState(initialEdges);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setNodes(getNodes(lang));
    }, [lang]);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();

        const handleThemeChange = () => checkTheme();
        window.addEventListener('theme-change', handleThemeChange);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') checkTheme();
            });
        });
        observer.observe(document.documentElement, { attributes: true });

        return () => {
            window.removeEventListener('theme-change', handleThemeChange);
            observer.disconnect();
        };
    }, []);

    const onNodeClick = (event, node) => {
        if (node.data.url) {
            window.location.href = node.data.url;
        }
    };

    return (
        <div style={{
            height: '400px',
            width: '100%',
            background: isDark ? '#1c1c1e' : '#F5F5F7',
            borderRadius: '20px',
            border: isDark ? '1px solid #38383A' : '1px solid #D2D2D7',
            transition: 'background-color 0.3s, border-color 0.3s'
        }}>
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
                <Background color={isDark ? '#555' : '#D2D2D7'} gap={16} />
            </ReactFlow>
        </div>
    );
}
