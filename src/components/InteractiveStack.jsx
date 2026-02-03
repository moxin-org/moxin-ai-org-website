import React, { useState, useEffect } from 'react';
import { ReactFlow, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const getNodes = (lang) => {
    const isZh = lang === 'zh';

    const NodeLabel = ({ title, description }) => (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-base font-bold">{title}</div>
            <div className="text-[9px] opacity-80 leading-tight max-w-[180px]">{description}</div>
        </div>
    );

    const LayerLabel = ({ title, titleZh }) => (
        <div className="flex items-center justify-end h-full pr-2">
            <div className="text-xs font-semibold opacity-70 tracking-wider text-right leading-tight">
                {isZh ? (
                    <>
                        <div>{titleZh}</div>
                        <div className="text-[10px]">{title}</div>
                    </>
                ) : title}
            </div>
        </div>
    );

    return [
        // Layer Labels (non-clickable, positioned on the left)
        {
            id: 'label-app',
            position: { x: -10, y: 35 },
            data: { label: <LayerLabel title="APPLICATION" titleZh="应用层" /> },
            style: { background: 'transparent', border: 'none', width: 120, height: 40 },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'label-framework',
            position: { x: -10, y: 135 },
            data: { label: <LayerLabel title="FRAMEWORK" titleZh="框架层" /> },
            style: { background: 'transparent', border: 'none', width: 120, height: 40 },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'label-models',
            position: { x: -10, y: 235 },
            data: { label: <LayerLabel title="MODELS" titleZh="模型层" /> },
            style: { background: 'transparent', border: 'none', width: 120, height: 40 },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'label-runtime',
            position: { x: -10, y: 335 },
            data: { label: <LayerLabel title="RUNTIME" titleZh="运行时" /> },
            style: { background: 'transparent', border: 'none', width: 120, height: 40 },
            selectable: false,
            draggable: false,
            connectable: false,
        },

        // Layer Group Backgrounds
        {
            id: 'group-app',
            position: { x: 115, y: 15 },
            data: { label: '' },
            style: {
                background: 'rgba(255, 45, 85, 0.08)',
                border: '1px dashed rgba(255, 45, 85, 0.3)',
                borderRadius: '16px',
                width: 450,
                height: 80,
            },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'group-framework',
            position: { x: 115, y: 115 },
            data: { label: '' },
            style: {
                background: 'rgba(48, 176, 199, 0.08)',
                border: '1px dashed rgba(48, 176, 199, 0.3)',
                borderRadius: '16px',
                width: 450,
                height: 80,
            },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'group-models',
            position: { x: 115, y: 215 },
            data: { label: '' },
            style: {
                background: 'rgba(94, 92, 230, 0.08)',
                border: '1px dashed rgba(94, 92, 230, 0.3)',
                borderRadius: '16px',
                width: 450,
                height: 80,
            },
            selectable: false,
            draggable: false,
            connectable: false,
        },
        {
            id: 'group-runtime',
            position: { x: 115, y: 315 },
            data: { label: '' },
            style: {
                background: 'rgba(5, 150, 105, 0.08)',
                border: '1px dashed rgba(5, 150, 105, 0.3)',
                borderRadius: '16px',
                width: 450,
                height: 80,
            },
            selectable: false,
            draggable: false,
            connectable: false,
        },

        // Application Layer - Moly and MoFA Studio
        {
            id: 'app',
            position: { x: 130, y: 25 },
            data: {
                label: <NodeLabel
                    title="Moly"
                    description={isZh ? 'AI 超级应用客户端' : 'AI Super App Client'}
                />,
                url: isZh ? '/zh/products/moly' : '/products/moly'
            },
            style: { background: '#FF2D55', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(255, 45, 85, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },
        {
            id: 'mofa-studio',
            position: { x: 350, y: 25 },
            data: {
                label: <NodeLabel
                    title="MoFA Studio"
                    description={isZh ? '可视化智能体开发 IDE' : 'Visual Agent Development IDE'}
                />,
                url: isZh ? '/zh/products/mofa' : '/products/mofa'
            },
            style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(48, 176, 199, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },

        // Framework Layer - MoFA and DORA
        {
            id: 'agents',
            position: { x: 130, y: 125 },
            data: {
                label: <NodeLabel
                    title="MoFA"
                    description={isZh ? '智能体构建中间件' : 'Middleware for Agents'}
                />,
                url: isZh ? '/zh/products/mofa' : '/products/mofa'
            },
            style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(48, 176, 199, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },
        {
            id: 'dora',
            position: { x: 350, y: 125 },
            data: {
                label: <NodeLabel
                    title="DORA"
                    description={isZh ? '机器人数据流中间件' : 'Middleware for Robotic Flows'}
                />,
                url: isZh ? '/zh/products/dora' : '/products/dora'
            },
            style: { background: '#FF9500', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(255, 149, 0, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },

        // Models Layer - Moxin LM
        {
            id: 'models',
            position: { x: 240, y: 225 },
            data: {
                label: <NodeLabel
                    title="Moxin LM"
                    description={isZh ? '智能核心 (权重, 语音, 微调)' : 'The Intelligence (Weights, Voice, Fine-tunes)'}
                />,
                url: isZh ? '/zh/products/moxin-lm' : '/products/moxin-lm'
            },
            style: { background: '#5E5CE6', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(94, 92, 230, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },

        // Runtime Layer - OminiX
        {
            id: 'compute',
            position: { x: 240, y: 325 },
            data: {
                label: <NodeLabel
                    title="OminiX"
                    description={isZh ? '边缘计算运行时 (本地)' : 'Edge Computing Runtime (Local)'}
                />,
                url: isZh ? '/zh/products/ominix' : '/products/ominix'
            },
            style: { background: '#059669', color: 'white', border: 'none', borderRadius: '14px', width: 200, height: 60, padding: '6px', boxShadow: '0 6px 16px rgba(5, 150, 105, 0.3)', cursor: 'pointer', zIndex: 10 },
            connectable: false,
        },
    ];
};

const initialEdges = [
    // Clean vertical connections - top to bottom only
    // Moly → MoFA (vertical left)
    { id: 'e-moly-mofa', source: 'app', target: 'agents', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    // MoFA Studio → MoFA (connects to MoFA as user specified)
    { id: 'e-studio-mofa', source: 'mofa-studio', target: 'agents', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    // MoFA → Moxin LM
    { id: 'e-mofa-models', source: 'agents', target: 'models', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    // DORA → Moxin LM
    { id: 'e-dora-models', source: 'dora', target: 'models', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
    // Moxin LM → OminiX
    { id: 'e-models-compute', source: 'models', target: 'compute', animated: true, style: { stroke: '#86868B', strokeWidth: 2 } },
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
            <style>{`
                .react-flow__handle {
                    opacity: 0 !important;
                    width: 1px !important;
                    height: 1px !important;
                }
            `}</style>
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
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
            >
                <Background color={isDark ? '#555' : '#D2D2D7'} gap={16} />
            </ReactFlow>
        </div>
    );
}
