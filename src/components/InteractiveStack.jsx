import React, { useState, useEffect } from 'react';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const getNodes = (lang) => {
    const isZh = lang === 'zh';

    const NodeLabel = ({ title, subtitle, description }) => (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-base font-bold">{title}</div>
            <div className="text-[10px] opacity-90 font-semibold uppercase tracking-wider mb-0.5">{subtitle}</div>
            <div className="text-[9px] opacity-80 leading-tight max-w-[180px]">{description}</div>
        </div>
    );

    return [
        {
            id: 'app',
            position: { x: 250, y: 0 },
            data: {
                label: <NodeLabel
                    title="Moly"
                    subtitle={isZh ? '应用层 Application' : 'Application'}
                    description={isZh ? '用户界面 / "Super App" 客户端' : 'The User Interface / "Super App" Client'}
                />,
                url: isZh ? '/zh/products/applications' : '/products/applications'
            },
            style: { background: '#FF2D55', color: 'white', border: 'none', borderRadius: '14px', width: 220, height: 80, padding: '6px', boxShadow: '0 6px 16px rgba(255, 45, 85, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'agents',
            position: { x: 120, y: 120 },
            data: {
                label: <NodeLabel
                    title="MoFA"
                    subtitle={isZh ? '框架层 Framework' : 'Framework'}
                    description={isZh ? '智能体构建中间件' : 'Middleware for Agents'}
                />,
                url: isZh ? '/zh/products/agents' : '/products/agents'
            },
            style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 80, padding: '6px', boxShadow: '0 6px 16px rgba(48, 176, 199, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'dora',
            position: { x: 380, y: 120 },
            data: {
                label: <NodeLabel
                    title="DORA"
                    subtitle={isZh ? '框架层 Framework' : 'Framework'}
                    description={isZh ? '机器人数据流中间件' : 'Middleware for Robotic Flows'}
                />,
                url: isZh ? '/zh/products/dora' : '/products/dora'
            },
            style: { background: '#FF9500', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 80, padding: '6px', boxShadow: '0 6px 16px rgba(255, 149, 0, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'models',
            position: { x: 250, y: 240 },
            data: {
                label: <NodeLabel
                    title="Moxin LM"
                    subtitle={isZh ? '模型层 Models' : 'Models'}
                    description={isZh ? '智能核心 (权重, 语音, 微调)' : 'The Intelligence (Weights, Voice, Fine-tunes)'}
                />,
                url: isZh ? '/zh/products/models' : '/products/models'
            },
            style: { background: '#5E5CE6', color: 'white', border: 'none', borderRadius: '14px', width: 220, height: 80, padding: '6px', boxShadow: '0 6px 16px rgba(94, 92, 230, 0.3)', cursor: 'pointer' },
        },
        {
            id: 'compute',
            position: { x: 250, y: 360 },
            data: {
                label: <NodeLabel
                    title="OminiX"
                    subtitle={isZh ? '运行时 Runtime' : 'Runtime'}
                    description={isZh ? '边缘计算运行时 (本地)' : 'OminiX for Edge (Local)'}
                />,
                url: isZh ? '/zh/products/compute' : '/products/compute'
            },
            style: { background: '#059669', color: 'white', border: 'none', borderRadius: '14px', width: 220, height: 80, padding: '6px', boxShadow: '0 6px 16px rgba(5, 150, 105, 0.3)', cursor: 'pointer' },
        },
    ];
};

const initialEdges = [
    { id: 'e1-2', source: 'app', target: 'agents', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    { id: 'e1-dora', source: 'app', target: 'dora', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    { id: 'e2-3', source: 'agents', target: 'models', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    { id: 'dora-3', source: 'dora', target: 'models', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    { id: 'e3-4', source: 'models', target: 'compute', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
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
            height: '500px',
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
