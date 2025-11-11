import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom node styles
const nodeStyles = {
  application: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '160px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
  },
  middleware: {
    background: 'linear-gradient(135deg, #14b8a6, #10b981)',
    border: '2px solid rgba(20, 184, 166, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '140px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
  },
  infrastructure: {
    background: 'linear-gradient(135deg, #f59e0b, #f97316)',
    border: '2px solid rgba(245, 158, 11, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '140px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
  },
  data: {
    background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    border: '2px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '120px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
  },
  edge: {
    background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    border: '2px solid rgba(6, 182, 212, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '120px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
  },
};

// Custom node components
const ApplicationNode = ({ data }) => (
  <div style={nodeStyles.application}>
    <div className="text-sm font-semibold">{data.label}</div>
    <div className="text-xs opacity-80 mt-1">{data.description}</div>
  </div>
);

const MiddlewareNode = ({ data }) => (
  <div style={nodeStyles.middleware}>
    <div className="text-sm font-semibold">{data.label}</div>
    <div className="text-xs opacity-80 mt-1">{data.description}</div>
  </div>
);

const InfrastructureNode = ({ data }) => (
  <div style={nodeStyles.infrastructure}>
    <div className="text-sm font-semibold">{data.label}</div>
    <div className="text-xs opacity-80 mt-1">{data.description}</div>
  </div>
);

const DataNode = ({ data }) => (
  <div style={nodeStyles.data}>
    <div className="text-sm font-semibold">{data.label}</div>
    <div className="text-xs opacity-80 mt-1">{data.description}</div>
  </div>
);

const EdgeNode = ({ data }) => (
  <div style={nodeStyles.edge}>
    <div className="text-sm font-semibold">{data.label}</div>
    <div className="text-xs opacity-80 mt-1">{data.description}</div>
  </div>
);

const nodeTypes = {
  application: ApplicationNode,
  middleware: MiddlewareNode,
  infrastructure: InfrastructureNode,
  data: DataNode,
  edge: EdgeNode,
};

// System Architecture Chart
const SystemArchitectureFlow = () => {
  const initialNodes = [
    // Application Layer
    {
      id: '1',
      type: 'application',
      position: { x: 250, y: 50 },
      data: { label: 'End User Applications', description: 'Web, Mobile, Desktop' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '2',
      type: 'application',
      position: { x: 50, y: 150 },
      data: { label: 'CRM Systems', description: 'Salesforce, HubSpot' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '3',
      type: 'application',
      position: { x: 450, y: 150 },
      data: { label: 'Enterprise Apps', description: 'ERP, HRM, Finance' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Middleware Layer
    {
      id: '4',
      type: 'middleware',
      position: { x: 250, y: 250 },
      data: { label: 'API Gateway', description: 'Authentication & Routing' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '5',
      type: 'middleware',
      position: { x: 50, y: 350 },
      data: { label: 'MoFA Framework', description: 'Multi-Agent Orchestration' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '6',
      type: 'middleware',
      position: { x: 450, y: 350 },
      data: { label: 'KTransformers', description: 'Datacenter Inference' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Infrastructure Layer
    {
      id: '7',
      type: 'infrastructure',
      position: { x: 250, y: 450 },
      data: { label: 'Kubernetes Cluster', description: 'Container Orchestration' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '8',
      type: 'infrastructure',
      position: { x: 50, y: 550 },
      data: { label: 'GPU Servers', description: 'NVIDIA A100/H100' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '9',
      type: 'infrastructure',
      position: { x: 450, y: 550 },
      data: { label: 'Edge Devices', description: 'CPU-Only Inference' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Data Layer
    {
      id: '10',
      type: 'data',
      position: { x: 150, y: 650 },
      data: { label: 'PostgreSQL', description: 'Transactional Data' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '11',
      type: 'data',
      position: { x: 350, y: 650 },
      data: { label: 'Vector DB', description: 'Embeddings & Search' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  ];

  const initialEdges = [
    { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e4-7', source: '4', target: '7', animated: true, style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'e5-8', source: '5', target: '8', animated: true, style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'e6-9', source: '6', target: '9', animated: true, style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'e7-10', source: '7', target: '10', animated: true, style: { stroke: '#f59e0b', strokeWidth: 2 } },
    { id: 'e7-11', source: '7', target: '11', animated: true, style: { stroke: '#f59e0b', strokeWidth: 2 } },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '500px', background: 'transparent' }} className="rounded-2xl border border-gray-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        attributionPosition="bottom-left"
      >
        <Background color="#334155" gap={16} />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
};

// KTransformers Optimization Flow
const KTransformersFlow = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'data',
      position: { x: 100, y: 50 },
      data: { label: 'Input Prompt', description: 'User Query' },
    },
    {
      id: '2',
      type: 'middleware',
      position: { x: 300, y: 50 },
      data: { label: 'MoE Router', description: 'Expert Selection' },
    },
    {
      id: '3',
      type: 'infrastructure',
      position: { x: 500, y: 50 },
      data: { label: 'GPU Memory', description: 'Expert Weights' },
    },
    {
      id: '4',
      type: 'infrastructure',
      position: { x: 500, y: 200 },
      data: { label: 'CPU Memory', description: 'Inactive Experts' },
    },
    {
      id: '5',
      type: 'middleware',
      position: { x: 300, y: 200 },
      data: { label: 'KV Cache', description: 'Attention States' },
    },
    {
      id: '6',
      type: 'application',
      position: { x: 100, y: 200 },
      data: { label: 'Generated Text', description: 'Model Output' },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Route' },
    { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Load' },
    { id: 'e2-4', source: '2', target: '4', animated: true, label: 'Offload' },
    { id: 'e3-5', source: '3', target: '5', animated: true, label: 'Cache' },
    { id: 'e5-6', source: '5', target: '6', animated: true, label: 'Generate' },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '400px', background: 'transparent' }} className="rounded-2xl border border-gray-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background color="#334155" gap={16} />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
};

// Benchmark Performance Chart
const BenchmarkFlow = ({ chartType = 'inference' }) => {
  const getChartData = () => {
    switch (chartType) {
      case 'inference':
        return {
          title: 'Inference Performance',
          data: [
            { name: 'DeepSeek-R1', ktransformers: 227.85, standard: 45, edge: 120 },
            { name: 'DeepSeek-V3', ktransformers: 40, standard: 12, edge: 80 },
            { name: 'Qwen Series', ktransformers: 180, standard: 65, edge: 95 },
            { name: 'Mixtral MoE', ktransformers: 95, standard: 35, edge: 60 },
            { name: 'Kimi K2', ktransformers: 150, standard: 55, edge: 85 },
          ]
        };
      case 'application':
        return {
          title: 'Application Performance',
          data: [
            { name: 'Binary Size', molykit: 25, electron: 150, reactNative: 45, native: 15 },
            { name: 'Startup Time', molykit: 0.8, electron: 3.2, reactNative: 1.5, native: 0.5 },
            { name: 'Memory Usage', molykit: 180, electron: 450, reactNative: 280, native: 150 },
          ]
        };
      case 'agent':
        return {
          title: 'Agent Framework Performance',
          data: [
            { name: '1 Instance', requests: 50, latency: 200 },
            { name: '4 Instances', requests: 195, latency: 210 },
            { name: '16 Instances', requests: 780, latency: 220 },
          ]
        };
      default:
        return { title: 'Performance Data', data: [] };
    }
  };

  const { title, data } = getChartData();

  const initialNodes = [
    {
      id: 'title',
      type: 'data',
      position: { x: 0, y: 0 },
      data: { label: title, description: 'Performance Metrics' },
    },
    ...data.map((item, index) => ({
      id: `item-${index}`,
      type: 'middleware',
      position: { x: index * 150, y: 100 },
      data: { label: item.name || item.model, description: 'Data Point' },
    }))
  ];

  const initialEdges = data.map((_, index) => ({
    id: `e-title-${index}`,
    source: 'title',
    target: `item-${index}`,
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 }
  }));

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '400px', background: 'transparent' }} className="rounded-2xl border border-gray-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background color="#334155" gap={16} />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
};

// Main Architecture Charts Component
const ArchitectureChartsXYFlow = ({ chartType = 'system' }) => {
  const renderChart = () => {
    switch (chartType) {
      case 'system':
        return <SystemArchitectureFlow />;
      case 'ktransformers':
        return <KTransformersFlow />;
      case 'inference':
      case 'application':
      case 'agent':
        return <BenchmarkFlow chartType={chartType} />;
      default:
        return <SystemArchitectureFlow />;
    }
  };

  return (
    <div className="w-full h-full">
      {renderChart()}
    </div>
  );
};

// Edge AI Deployment Flow
const EdgeFlow = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'edge',
      position: { x: 100, y: 50 },
      data: { label: 'Model Selection', description: 'Choose AI Model' },
    },
    {
      id: '2',
      type: 'edge',
      position: { x: 300, y: 50 },
      data: { label: 'Quantization', description: 'INT8/FP16 Optimization' },
    },
    {
      id: '3',
      type: 'edge',
      position: { x: 500, y: 50 },
      data: { label: 'Compilation', description: 'Target Platform' },
    },
    {
      id: '4',
      type: 'infrastructure',
      position: { x: 500, y: 200 },
      data: { label: 'Edge Device', description: 'On-device Inference' },
    },
    {
      id: '5',
      type: 'application',
      position: { x: 300, y: 200 },
      data: { label: 'Real-time Response', description: '<500ms Latency' },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Optimize' },
    { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Compile' },
    { id: 'e3-4', source: '3', target: '4', animated: true, label: 'Deploy' },
    { id: 'e4-5', source: '4', target: '5', animated: true, label: 'Respond' },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '400px', background: 'transparent' }} className="rounded-2xl border border-gray-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background color="#334155" gap={16} />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
};

// MoFA Framework Flow
const MoFAFlow = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'application',
      position: { x: 250, y: 50 },
      data: { label: 'User Request', description: 'Task Input' },
    },
    {
      id: '2',
      type: 'middleware',
      position: { x: 100, y: 150 },
      data: { label: 'Agent 1', description: 'Data Processing' },
    },
    {
      id: '3',
      type: 'middleware',
      position: { x: 400, y: 150 },
      data: { label: 'Agent 2', description: 'Analysis & Reasoning' },
    },
    {
      id: '4',
      type: 'data',
      position: { x: 250, y: 250 },
      data: { label: 'State Store', description: 'Shared Context' },
    },
    {
      id: '5',
      type: 'application',
      position: { x: 250, y: 350 },
      data: { label: 'Final Result', description: 'Coordinated Output' },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Delegate' },
    { id: 'e1-3', source: '1', target: '3', animated: true, label: 'Delegate' },
    { id: 'e2-4', source: '2', target: '4', animated: true, label: 'Update' },
    { id: 'e3-4', source: '3', target: '4', animated: true, label: 'Update' },
    { id: 'e4-5', source: '4', target: '5', animated: true, label: 'Finalize' },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '500px', background: 'transparent' }} className="rounded-2xl border border-gray-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background color="#334155" gap={16} />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
};


export { ArchitectureChartsXYFlow as default };
