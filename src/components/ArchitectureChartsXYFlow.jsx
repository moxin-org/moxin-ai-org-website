import React, { useCallback, useEffect, useState } from 'react';
import { ReactFlow, Controls, Background, useNodesState, useEdgesState, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom node styles matching exact mermaid colors
const nodeStyles = {
  // End User Applications - #7f8c8d from mermaid
  application: {
    background: '#7f8c8d',
    border: '2px solid #707b7c',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '160px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
  },
  // MolyKit - #f39c12 from mermaid
  middleware: {
    background: '#f39c12',
    border: '2px solid #d68910',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '140px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
  },
  // Moly Proxy - #d35400 from mermaid
  infrastructure: {
    background: '#d35400',
    border: '2px solid #ba4a00',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '140px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
  },
  // Moly Server - #9b59b6 from mermaid
  data: {
    background: '#9b59b6',
    border: '2px solid #8e44ad',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '120px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
  },
  // MoFA - #e74c3c from mermaid
  edge: {
    background: '#e74c3c',
    border: '2px solid #c0392b',
    borderRadius: '12px',
    padding: '12px',
    minWidth: '120px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
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

// System Architecture Chart - Matching exact mermaid structure
const SystemArchitectureFlow = () => {
  const initialNodes = [
    // End User Applications (matching mermaid exactly)
    {
      id: 'A1',
      type: 'application',
      position: { x: 100, y: 50 },
      data: { label: 'Desktop Apps', description: 'Windows/macOS/Linux' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'A2',
      type: 'application',
      position: { x: 300, y: 50 },
      data: { label: 'Mobile Apps', description: 'iOS/Android/HarmonyOS' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'A3',
      type: 'application',
      position: { x: 500, y: 50 },
      data: { label: 'Web Applications', description: 'Browser-based' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'A4',
      type: 'application',
      position: { x: 700, y: 50 },
      data: { label: 'Enterprise Systems', description: 'CRM/Call Center' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // MolyKit Application Framework
    {
      id: 'MK1',
      type: 'middleware',
      position: { x: 150, y: 200 },
      data: { label: 'API Crates', description: 'API interfaces' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MK2',
      type: 'middleware',
      position: { x: 300, y: 200 },
      data: { label: 'Client Crates', description: 'Client libraries' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MK3',
      type: 'middleware',
      position: { x: 450, y: 200 },
      data: { label: 'UI Components', description: 'UI framework' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MK4',
      type: 'middleware',
      position: { x: 600, y: 200 },
      data: { label: 'MPC Crates', description: 'Multi-party computation' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MK5',
      type: 'middleware',
      position: { x: 750, y: 200 },
      data: { label: 'Moly App Implementation', description: 'App implementation' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Moly Proxy & Middleware
    {
      id: 'MP1',
      type: 'middleware',
      position: { x: 200, y: 350 },
      data: { label: 'Configuration Management', description: 'Config management' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MP2',
      type: 'middleware',
      position: { x: 350, y: 350 },
      data: { label: 'Privacy Memory Manager', description: 'Privacy management' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MP3',
      type: 'middleware',
      position: { x: 500, y: 350 },
      data: { label: 'SSO Authentication', description: 'Single sign-on' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MP4',
      type: 'middleware',
      position: { x: 650, y: 350 },
      data: { label: 'Prompt Injection Prevention', description: 'Security layer' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MP5',
      type: 'middleware',
      position: { x: 800, y: 350 },
      data: { label: 'MPC Connector', description: 'MPC connector' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Moly Server - OpenAI Compatible API
    {
      id: 'MS1',
      type: 'middleware',
      position: { x: 200, y: 500 },
      data: { label: 'Chat Completion API', description: 'OpenAI compatible' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MS2',
      type: 'middleware',
      position: { x: 350, y: 500 },
      data: { label: 'Response API', description: 'Response handling' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MS3',
      type: 'middleware',
      position: { x: 500, y: 500 },
      data: { label: 'Assistant API', description: 'Assistant interface' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MS4',
      type: 'middleware',
      position: { x: 650, y: 500 },
      data: { label: 'WebSocket/RTC/SIP', description: 'Real-time communication' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Agent Framework - MoFA
    {
      id: 'MOFA1',
      type: 'middleware',
      position: { x: 200, y: 650 },
      data: { label: 'Dataflow Engine', description: 'Dataflow processing' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MOFA2',
      type: 'middleware',
      position: { x: 350, y: 650 },
      data: { label: 'Multi-Agent Orchestration', description: 'Agent coordination' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MOFA3',
      type: 'middleware',
      position: { x: 500, y: 650 },
      data: { label: 'Stateless Architecture', description: 'Stateless design' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MOFA4',
      type: 'middleware',
      position: { x: 650, y: 650 },
      data: { label: 'Real-time Streaming', description: 'Stream processing' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'MOFA5',
      type: 'middleware',
      position: { x: 800, y: 650 },
      data: { label: 'Cloud Native Deployment', description: 'Kubernetes ready' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Model Inference Layer
    {
      id: 'FM1',
      type: 'data',
      position: { x: 150, y: 800 },
      data: { label: 'DeepSeek V3/R1', description: '671B Parameters' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'FM2',
      type: 'data',
      position: { x: 300, y: 800 },
      data: { label: 'Kimi K2', description: 'Strong Reasoning' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'FM3',
      type: 'data',
      position: { x: 450, y: 800 },
      data: { label: 'Qwen Series', description: 'Multilingual' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'FM4',
      type: 'data',
      position: { x: 600, y: 800 },
      data: { label: 'Other STOA Models', description: 'State-of-the-art' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Edge Models
    {
      id: 'EM1',
      type: 'edge',
      position: { x: 250, y: 950 },
      data: { label: 'Small Language Models', description: 'Edge optimized' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'EM2',
      type: 'edge',
      position: { x: 400, y: 950 },
      data: { label: 'Multi-Modal Models', description: 'Vision + Text' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'EM3',
      type: 'edge',
      position: { x: 550, y: 950 },
      data: { label: 'TTS/ASR Models', description: 'Voice processing' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'EM4',
      type: 'edge',
      position: { x: 700, y: 950 },
      data: { label: 'Voice Cloning', description: 'Voice synthesis' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Inference Engines
    {
      id: 'IE1',
      type: 'infrastructure',
      position: { x: 300, y: 1100 },
      data: { label: 'KTransformers', description: 'Datacenter Optimized' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'IE2',
      type: 'infrastructure',
      position: { x: 500, y: 1100 },
      data: { label: 'Omnix Edge', description: 'Edge Optimized' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },

    // Hardware Platforms
    {
      id: 'HW1',
      type: 'infrastructure',
      position: { x: 100, y: 1250 },
      data: { label: 'Enterprise GPU Clusters', description: 'L20/H100/A100' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'HW2',
      type: 'infrastructure',
      position: { x: 300, y: 1250 },
      data: { label: 'AI PCs & Workstations', description: 'Desktop AI' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'HW3',
      type: 'infrastructure',
      position: { x: 500, y: 1250 },
      data: { label: 'Embedded Edge Processors', description: 'Edge computing' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'HW4',
      type: 'infrastructure',
      position: { x: 700, y: 1250 },
      data: { label: 'Mobile Devices', description: 'Smartphones/Tablets' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: 'HW5',
      type: 'infrastructure',
      position: { x: 900, y: 1250 },
      data: { label: 'Cloud Infrastructure', description: 'AWS/Azure/GCP' },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  ];

  const initialEdges = [
    // From End User Applications to MolyKit (matching mermaid exactly)
    { id: 'A1-MK1', source: 'A1', target: 'MK1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'A2-MK1', source: 'A2', target: 'MK1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'A3-MK1', source: 'A3', target: 'MK1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'A4-MK1', source: 'A4', target: 'MK1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From MolyKit to Moly Proxy (matching mermaid exactly)
    { id: 'MK1-MP1', source: 'MK1', target: 'MP1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MK1-MP3', source: 'MK1', target: 'MP3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MK1-MP4', source: 'MK1', target: 'MP4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From Moly Proxy to Moly Server (matching mermaid exactly)
    { id: 'MP1-MS1', source: 'MP1', target: 'MS1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MP3-MS1', source: 'MP3', target: 'MS1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MP4-MS1', source: 'MP4', target: 'MS1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From Moly Server to MoFA (matching mermaid exactly)
    { id: 'MS1-MOFA1', source: 'MS1', target: 'MOFA1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MS2-MOFA2', source: 'MS2', target: 'MOFA2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MS3-MOFA3', source: 'MS3', target: 'MOFA3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MS4-MOFA4', source: 'MS4', target: 'MOFA4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From MoFA to Models (matching mermaid exactly)
    { id: 'MOFA1-FM1', source: 'MOFA1', target: 'FM1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MOFA1-EM1', source: 'MOFA1', target: 'EM1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'MOFA1-EM2', source: 'MOFA1', target: 'EM2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From Models to Inference Engines (matching mermaid exactly)
    { id: 'FM1-IE1', source: 'FM1', target: 'IE1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'FM2-IE1', source: 'FM2', target: 'IE1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'FM3-IE1', source: 'FM3', target: 'IE1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'EM1-IE2', source: 'EM1', target: 'IE2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'EM2-IE2', source: 'EM2', target: 'IE2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'EM3-IE2', source: 'EM3', target: 'IE2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'EM4-IE2', source: 'EM4', target: 'IE2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },

    // From Inference Engines to Hardware (matching mermaid exactly)
    { id: 'IE1-HW1', source: 'IE1', target: 'HW1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'IE1-HW5', source: 'IE1', target: 'HW5', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'IE2-HW2', source: 'IE2', target: 'HW2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'IE2-HW3', source: 'IE2', target: 'HW3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
    { id: 'IE2-HW4', source: 'IE2', target: 'HW4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2, strokeDasharray: '4 4' } },
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

// KTransformers Optimization Flow - Matching exact mermaid structure
const KTransformersFlow = () => {
  const initialNodes = [
    // Pretrained Models
    {
      id: 'DS',
      type: 'data',
      position: { x: 100, y: 50 },
      data: { label: 'DeepSeek-V3/R1', description: '671B Parameters' },
    },
    {
      id: 'Kimi',
      type: 'data',
      position: { x: 300, y: 50 },
      data: { label: 'Kimi K2', description: 'Strong Reasoning' },
    },
    {
      id: 'Qwen',
      type: 'data',
      position: { x: 500, y: 50 },
      data: { label: 'Qwen Series', description: 'Multilingual' },
    },
    {
      id: 'Mixtral',
      type: 'data',
      position: { x: 700, y: 50 },
      data: { label: 'Mixtral MoE', description: 'Sparse Architecture' },
    },

    // KTransformers Features
    {
      id: 'CPU',
      type: 'middleware',
      position: { x: 100, y: 200 },
      data: { label: 'CPU', description: 'Infer AMX/AVX Optimized' },
    },
    {
      id: 'GPU',
      type: 'middleware',
      position: { x: 300, y: 200 },
      data: { label: 'GPU Acceleration', description: 'Marlin Kernels' },
    },
    {
      id: 'MEM',
      type: 'middleware',
      position: { x: 500, y: 200 },
      data: { label: 'Memory Management', description: 'Intelligent Caching' },
    },
    {
      id: 'MOE',
      type: 'middleware',
      position: { x: 700, y: 200 },
      data: { label: 'MoE Optimization', description: 'Expert Routing' },
    },
    {
      id: 'QUANT',
      type: 'middleware',
      position: { x: 900, y: 200 },
      data: { label: 'Quantization', description: 'INT4/INT8/GPTQ' },
    },

    // Performance Metrics
    {
      id: 'PERF1',
      type: 'data',
      position: { x: 100, y: 350 },
      data: { label: '227.85 tokens/s', description: '8-way Concurrent' },
    },
    {
      id: 'PERF2',
      type: 'data',
      position: { x: 300, y: 350 },
      data: { label: '40 tokens/s', description: 'SFT Fine-tuning' },
    },
    {
      id: 'PERF3',
      type: 'data',
      position: { x: 500, y: 350 },
      data: { label: '30x Prefill', description: 'Latency Reduction' },
    },
    {
      id: 'PERF4',
      type: 'data',
      position: { x: 700, y: 350 },
      data: { label: '3x Generation', description: 'Speed Improvement' },
    },
  ];

  const initialEdges = [
    // From Pretrained Models to KTransformers Features
    { id: 'DS-CPU', source: 'DS', target: 'CPU', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'Kimi-GPU', source: 'Kimi', target: 'GPU', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'Qwen-MEM', source: 'Qwen', target: 'MEM', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'Mixtral-MOE', source: 'Mixtral', target: 'MOE', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'Mixtral-QUANT', source: 'Mixtral', target: 'QUANT', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },

    // From KTransformers Features to Performance Metrics
    { id: 'CPU-PERF1', source: 'CPU', target: 'PERF1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'GPU-PERF2', source: 'GPU', target: 'PERF2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'MEM-PERF3', source: 'MEM', target: 'PERF3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'MOE-PERF4', source: 'MOE', target: 'PERF4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'QUANT-PERF4', source: 'QUANT', target: 'PERF4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
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

// MoFA Framework Flow - Matching exact mermaid structure
const MoFAFlow = () => {
  const initialNodes = [
    // Agent Composition
    {
      id: 'A',
      type: 'application',
      position: { x: 100, y: 50 },
      data: { label: 'Simple Agent', description: 'Single Function' },
    },
    {
      id: 'B',
      type: 'application',
      position: { x: 300, y: 50 },
      data: { label: 'Composite Agent', description: 'Multiple Agents' },
    },
    {
      id: 'C',
      type: 'application',
      position: { x: 500, y: 50 },
      data: { label: 'Super Agent', description: 'Hierarchical' },
    },
    {
      id: 'D',
      type: 'application',
      position: { x: 700, y: 50 },
      data: { label: 'Meta Agent', description: 'Agent Orchestration' },
    },

    // Dataflow Architecture
    {
      id: 'DF1',
      type: 'middleware',
      position: { x: 100, y: 200 },
      data: { label: 'Nodes', description: 'Functional Units' },
    },
    {
      id: 'DF2',
      type: 'middleware',
      position: { x: 300, y: 200 },
      data: { label: 'Edges', description: 'Data Streams' },
    },
    {
      id: 'DF3',
      type: 'middleware',
      position: { x: 500, y: 200 },
      data: { label: 'Graphs', description: 'Computation Flow' },
    },
    {
      id: 'DF4',
      type: 'middleware',
      position: { x: 700, y: 200 },
      data: { label: 'Shared Memory', description: 'Zero-Copy IPC' },
    },
    {
      id: 'DF5',
      type: 'middleware',
      position: { x: 900, y: 200 },
      data: { label: 'TCP Communication', description: 'Distributed' },
    },

    // Development Experience
    {
      id: 'DEV1',
      type: 'data',
      position: { x: 100, y: 350 },
      data: { label: 'YAML Configuration', description: 'Declarative' },
    },
    {
      id: 'DEV2',
      type: 'data',
      position: { x: 300, y: 350 },
      data: { label: 'Stage GUI', description: 'Drag & Drop' },
    },
    {
      id: 'DEV3',
      type: 'data',
      position: { x: 500, y: 350 },
      data: { label: 'Python SDK', description: '3.10+ Support' },
    },
    {
      id: 'DEV4',
      type: 'data',
      position: { x: 700, y: 350 },
      data: { label: 'Rust SDK', description: 'Native Performance' },
    },
    {
      id: 'DEV5',
      type: 'data',
      position: { x: 900, y: 350 },
      data: { label: 'Package Ecosystem', description: 'pip/cargo' },
    },

    // Enterprise Features
    {
      id: 'ENT1',
      type: 'infrastructure',
      position: { x: 200, y: 500 },
      data: { label: 'Stateless Design', description: 'Horizontally Scalable' },
    },
    {
      id: 'ENT2',
      type: 'infrastructure',
      position: { x: 400, y: 500 },
      data: { label: 'OpenTelemetry', description: 'Full Observability' },
    },
    {
      id: 'ENT3',
      type: 'infrastructure',
      position: { x: 600, y: 500 },
      data: { label: 'Hot-Swap Agents', description: 'Zero Downtime' },
    },
    {
      id: 'ENT4',
      type: 'infrastructure',
      position: { x: 800, y: 500 },
      data: { label: 'Cloud Native', description: 'Kubernetes Ready' },
    },
    {
      id: 'ENT5',
      type: 'infrastructure',
      position: { x: 1000, y: 500 },
      data: { label: 'ROS2 Integration', description: 'Robotic Systems' },
    },

    // Pre-built Nodes
    {
      id: 'NODE1',
      type: 'edge',
      position: { x: 100, y: 650 },
      data: { label: 'LLM API Calls', description: 'OpenAI/Local' },
    },
    {
      id: 'NODE2',
      type: 'edge',
      position: { x: 300, y: 650 },
      data: { label: 'Tool Integration', description: 'APIs/Functions' },
    },
    {
      id: 'NODE3',
      type: 'edge',
      position: { x: 500, y: 650 },
      data: { label: 'Terminal I/O', description: 'Shell Commands' },
    },
    {
      id: 'NODE4',
      type: 'edge',
      position: { x: 700, y: 650 },
      data: { label: 'Data Processing', description: 'ETL Pipelines' },
    },
    {
      id: 'NODE5',
      type: 'edge',
      position: { x: 900, y: 650 },
      data: { label: 'CRM Integration', description: 'Salesforce/HubSpot' },
    },
  ];

  const initialEdges = [
    // From Agent Composition to Dataflow Architecture
    { id: 'A-DF1', source: 'A', target: 'DF1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'B-DF3', source: 'B', target: 'DF3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'C-DF3', source: 'C', target: 'DF3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'D-DF3', source: 'D', target: 'DF3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },

    // From Dataflow Architecture to Development Experience
    { id: 'DF1-DEV1', source: 'DF1', target: 'DEV1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'DF3-DEV2', source: 'DF3', target: 'DEV2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'DF1-DEV3', source: 'DF1', target: 'DEV3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'DF1-DEV4', source: 'DF1', target: 'DEV4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },

    // From Dataflow Architecture to Enterprise Features
    { id: 'DF4-ENT1', source: 'DF4', target: 'ENT1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'DF5-ENT1', source: 'DF5', target: 'ENT1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },

    // From Enterprise Features to Pre-built Nodes
    { id: 'ENT1-NODE1', source: 'ENT1', target: 'NODE1', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'ENT2-NODE2', source: 'ENT2', target: 'NODE2', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'ENT3-NODE3', source: 'ENT3', target: 'NODE3', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'ENT4-NODE4', source: 'ENT4', target: 'NODE4', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
    { id: 'ENT5-NODE5', source: 'ENT5', target: 'NODE5', animated: true, style: { stroke: '#7f8c8d', strokeWidth: 2 } },
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
