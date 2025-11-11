// Architecture Charts for Moxin-Org Enterprise AI Solution
// Converted from Mermaid diagrams to interactive ECharts visualizations

class ArchitectureCharts {
    constructor() {
        this.charts = {};
        this.init();
    }

    init() {
        this.createSystemArchitectureChart();
        this.createKTransformersChart();
        this.createEdgeModelsChart();
        this.createMoFAFrameworkChart();
        this.createMolyServerChart();
    }

    // Main System Architecture Chart
    createSystemArchitectureChart() {
        const chartElement = document.getElementById('systemArchitectureChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#3b82f6',
                textStyle: { color: '#ffffff' }
            },
            series: [{
                type: 'graph',
                layout: 'force',
                animation: true,
                roam: true,
                draggable: true,
                focusNodeAdjacency: true,
                force: {
                    repulsion: 1000,
                    gravity: 0.1,
                    edgeLength: 200,
                    layoutAnimation: true
                },
                data: [
                    // Application Layer
                    { 
                        name: 'End User Applications', 
                        x: 0, y: 0, 
                        symbolSize: 80,
                        itemStyle: { color: '#7f8c8d' },
                        category: 0
                    },
                    { 
                        name: 'Desktop Apps', 
                        x: -100, y: -50, 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Mobile Apps', 
                        x: -50, y: -50, 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Web Applications', 
                        x: 50, y: -50, 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Enterprise Systems', 
                        x: 100, y: -50, 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },

                    // MolyKit Layer
                    { 
                        name: 'MolyKit Framework', 
                        x: 0, y: 150, 
                        symbolSize: 80,
                        itemStyle: { color: '#f39c12' },
                        category: 2
                    },
                    { 
                        name: 'API Crates', 
                        x: -80, y: 120, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 3
                    },
                    { 
                        name: 'Client Crates', 
                        x: -40, y: 120, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 3
                    },
                    { 
                        name: 'UI Components', 
                        x: 0, y: 120, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 3
                    },
                    { 
                        name: 'MPC Crates', 
                        x: 40, y: 120, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 3
                    },

                    // Middleware Layer
                    { 
                        name: 'Moly Proxy', 
                        x: 0, y: 300, 
                        symbolSize: 80,
                        itemStyle: { color: '#d35400' },
                        category: 4
                    },
                    { 
                        name: 'Configuration', 
                        x: -60, y: 270, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 5
                    },
                    { 
                        name: 'SSO Auth', 
                        x: -20, y: 270, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 5
                    },
                    { 
                        name: 'Security', 
                        x: 20, y: 270, 
                        symbolSize: 50,
                        itemStyle: { color: '#e67e22' },
                        category: 5
                    },

                    // API Gateway
                    { 
                        name: 'Moly Server', 
                        x: 0, y: 450, 
                        symbolSize: 80,
                        itemStyle: { color: '#9b59b6' },
                        category: 6
                    },
                    { 
                        name: 'Chat API', 
                        x: -60, y: 420, 
                        symbolSize: 50,
                        itemStyle: { color: '#8e44ad' },
                        category: 7
                    },
                    { 
                        name: 'Response API', 
                        x: -20, y: 420, 
                        symbolSize: 50,
                        itemStyle: { color: '#8e44ad' },
                        category: 7
                    },
                    { 
                        name: 'Assistant API', 
                        x: 20, y: 420, 
                        symbolSize: 50,
                        itemStyle: { color: '#8e44ad' },
                        category: 7
                    },

                    // Agent Framework
                    { 
                        name: 'MoFA Framework', 
                        x: 0, y: 600, 
                        symbolSize: 80,
                        itemStyle: { color: '#e74c3c' },
                        category: 8
                    },
                    { 
                        name: 'Dataflow Engine', 
                        x: -80, y: 570, 
                        symbolSize: 50,
                        itemStyle: { color: '#c0392b' },
                        category: 9
                    },
                    { 
                        name: 'Multi-Agent', 
                        x: -40, y: 570, 
                        symbolSize: 50,
                        itemStyle: { color: '#c0392b' },
                        category: 9
                    },
                    { 
                        name: 'Stateless Arch', 
                        x: 0, y: 570, 
                        symbolSize: 50,
                        itemStyle: { color: '#c0392b' },
                        category: 9
                    },

                    // Inference Layer
                    { 
                        name: 'Inference Engines', 
                        x: -200, y: 750, 
                        symbolSize: 80,
                        itemStyle: { color: '#3498db' },
                        category: 10
                    },
                    { 
                        name: 'KTransformers', 
                        x: -250, y: 720, 
                        symbolSize: 60,
                        itemStyle: { color: '#2980b9' },
                        category: 11
                    },
                    { 
                        name: 'Omnix Edge', 
                        x: -150, y: 720, 
                        symbolSize: 60,
                        itemStyle: { color: '#16a085' },
                        category: 11
                    },

                    // Models
                    { 
                        name: 'Foundation Models', 
                        x: -300, y: 900, 
                        symbolSize: 80,
                        itemStyle: { color: '#2c3e50' },
                        category: 12
                    },
                    { 
                        name: 'DeepSeek V3', 
                        x: -350, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#34495e' },
                        category: 13
                    },
                    { 
                        name: 'Kimi K2', 
                        x: -300, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#34495e' },
                        category: 13
                    },
                    { 
                        name: 'Qwen Series', 
                        x: -250, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#34495e' },
                        category: 13
                    },

                    // Edge Models
                    { 
                        name: 'Edge Models', 
                        x: -100, y: 900, 
                        symbolSize: 80,
                        itemStyle: { color: '#27ae60' },
                        category: 14
                    },
                    { 
                        name: 'Small Language Models', 
                        x: -150, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#229954' },
                        category: 15
                    },
                    { 
                        name: 'Multi-Modal Models', 
                        x: -100, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#229954' },
                        category: 15
                    },
                    { 
                        name: 'TTS/ASR Models', 
                        x: -50, y: 870, 
                        symbolSize: 60,
                        itemStyle: { color: '#229954' },
                        category: 15
                    },

                    // Hardware
                    { 
                        name: 'Hardware Platforms', 
                        x: 200, y: 750, 
                        symbolSize: 80,
                        itemStyle: { color: '#95a5a6' },
                        category: 16
                    },
                    { 
                        name: 'GPU Clusters', 
                        x: 150, y: 720, 
                        symbolSize: 60,
                        itemStyle: { color: '#7f8c8d' },
                        category: 17
                    },
                    { 
                        name: 'AI PCs', 
                        x: 200, y: 720, 
                        symbolSize: 60,
                        itemStyle: { color: '#7f8c8d' },
                        category: 17
                    },
                    { 
                        name: 'Edge Processors', 
                        x: 250, y: 720, 
                        symbolSize: 60,
                        itemStyle: { color: '#7f8c8d' },
                        category: 17
                    }
                ],
                links: [
                    // Application connections
                    { source: 'End User Applications', target: 'Desktop Apps' },
                    { source: 'End User Applications', target: 'Mobile Apps' },
                    { source: 'End User Applications', target: 'Web Applications' },
                    { source: 'End User Applications', target: 'Enterprise Systems' },
                    
                    // MolyKit connections
                    { source: 'Desktop Apps', target: 'MolyKit Framework' },
                    { source: 'Mobile Apps', target: 'MolyKit Framework' },
                    { source: 'Web Applications', target: 'MolyKit Framework' },
                    { source: 'Enterprise Systems', target: 'MolyKit Framework' },
                    { source: 'MolyKit Framework', target: 'API Crates' },
                    { source: 'MolyKit Framework', target: 'Client Crates' },
                    { source: 'MolyKit Framework', target: 'UI Components' },
                    { source: 'MolyKit Framework', target: 'MPC Crates' },
                    
                    // Middleware connections
                    { source: 'API Crates', target: 'Moly Proxy' },
                    { source: 'Client Crates', target: 'Moly Proxy' },
                    { source: 'UI Components', target: 'Moly Proxy' },
                    { source: 'Moly Proxy', target: 'Configuration' },
                    { source: 'Moly Proxy', target: 'SSO Auth' },
                    { source: 'Moly Proxy', target: 'Security' },
                    
                    // API Gateway connections
                    { source: 'Configuration', target: 'Moly Server' },
                    { source: 'SSO Auth', target: 'Moly Server' },
                    { source: 'Security', target: 'Moly Server' },
                    { source: 'Moly Server', target: 'Chat API' },
                    { source: 'Moly Server', target: 'Response API' },
                    { source: 'Moly Server', target: 'Assistant API' },
                    
                    // Agent Framework connections
                    { source: 'Chat API', target: 'MoFA Framework' },
                    { source: 'Response API', target: 'MoFA Framework' },
                    { source: 'Assistant API', target: 'MoFA Framework' },
                    { source: 'MoFA Framework', target: 'Dataflow Engine' },
                    { source: 'MoFA Framework', target: 'Multi-Agent' },
                    { source: 'MoFA Framework', target: 'Stateless Arch' },
                    
                    // Inference connections
                    { source: 'Dataflow Engine', target: 'Inference Engines' },
                    { source: 'Multi-Agent', target: 'Inference Engines' },
                    { source: 'Stateless Arch', target: 'Inference Engines' },
                    { source: 'Inference Engines', target: 'KTransformers' },
                    { source: 'Inference Engines', target: 'Omnix Edge' },
                    
                    // Model connections
                    { source: 'KTransformers', target: 'Foundation Models' },
                    { source: 'Omnix Edge', target: 'Edge Models' },
                    { source: 'Foundation Models', target: 'DeepSeek V3' },
                    { source: 'Foundation Models', target: 'Kimi K2' },
                    { source: 'Foundation Models', target: 'Qwen Series' },
                    { source: 'Edge Models', target: 'Small Language Models' },
                    { source: 'Edge Models', target: 'Multi-Modal Models' },
                    { source: 'Edge Models', target: 'TTS/ASR Models' },
                    
                    // Hardware connections
                    { source: 'KTransformers', target: 'Hardware Platforms' },
                    { source: 'Omnix Edge', target: 'Hardware Platforms' },
                    { source: 'Hardware Platforms', target: 'GPU Clusters' },
                    { source: 'Hardware Platforms', target: 'AI PCs' },
                    { source: 'Hardware Platforms', target: 'Edge Processors' }
                ],
                categories: [
                    { name: 'Applications', itemStyle: { color: '#7f8c8d' } },
                    { name: 'App Types', itemStyle: { color: '#3498db' } },
                    { name: 'MolyKit', itemStyle: { color: '#f39c12' } },
                    { name: 'Components', itemStyle: { color: '#e67e22' } },
                    { name: 'Middleware', itemStyle: { color: '#d35400' } },
                    { name: 'Middleware Comps', itemStyle: { color: '#e67e22' } },
                    { name: 'API Gateway', itemStyle: { color: '#9b59b6' } },
                    { name: 'APIs', itemStyle: { color: '#8e44ad' } },
                    { name: 'Agent Framework', itemStyle: { color: '#e74c3c' } },
                    { name: 'Framework Comps', itemStyle: { color: '#c0392b' } },
                    { name: 'Inference', itemStyle: { color: '#3498db' } },
                    { name: 'Engines', itemStyle: { color: '#2980b9' } },
                    { name: 'Foundation Models', itemStyle: { color: '#2c3e50' } },
                    { name: 'Datacenter Models', itemStyle: { color: '#34495e' } },
                    { name: 'Edge Models', itemStyle: { color: '#27ae60' } },
                    { name: 'Edge Model Types', itemStyle: { color: '#229954' } },
                    { name: 'Hardware', itemStyle: { color: '#95a5a6' } },
                    { name: 'Hardware Types', itemStyle: { color: '#7f8c8d' } }
                ],
                lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                    opacity: 0.6
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 3,
                        opacity: 1
                    }
                }
            }],
            title: {
                text: 'Moxin-Org Enterprise AI System Architecture',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            }
        };

        chart.setOption(option);
        this.charts.systemArchitecture = chart;

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // KTransformers Performance Chart
    createKTransformersChart() {
        const chartElement = document.getElementById('ktransformersChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#94a3b8' },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#3b82f6',
                textStyle: { color: '#ffffff' }
            },
            legend: {
                data: ['Pretrained Models', 'KTransformers Features', 'Performance Metrics'],
                textStyle: { color: '#94a3b8' },
                top: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Model Loading', 'Inference', 'Memory Management', 'MoE Optimization'],
                axisLine: { lineStyle: { color: '#334155' } },
                axisLabel: { color: '#94a3b8' }
            },
            yAxis: {
                type: 'value',
                name: 'Performance (tokens/sec)',
                nameTextStyle: { color: '#94a3b8' },
                axisLine: { lineStyle: { color: '#334155' } },
                axisLabel: { color: '#94a3b8' },
                splitLine: { lineStyle: { color: '#334155', type: 'dashed' } }
            },
            series: [
                {
                    name: 'Standard Inference',
                    type: 'bar',
                    data: [45, 12, 65, 35],
                    itemStyle: { 
                        color: '#64748b',
                        borderRadius: [4, 4, 0, 0]
                    }
                },
                {
                    name: 'KTransformers Optimization',
                    type: 'bar',
                    data: [227.85, 40, 180, 95],
                    itemStyle: { 
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3b82f6' },
                            { offset: 1, color: '#1e40af' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    }
                },
                {
                    name: 'Performance Improvement',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [5.06, 3.33, 2.77, 2.71],
                    lineStyle: { color: '#10b981', width: 3 },
                    itemStyle: { color: '#10b981' },
                    smooth: true
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Tokens/sec',
                    nameTextStyle: { color: '#94a3b8' },
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' },
                    splitLine: { lineStyle: { color: '#334155', type: 'dashed' } }
                },
                {
                    type: 'value',
                    name: 'Speedup Factor',
                    nameTextStyle: { color: '#94a3b8' },
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' },
                    splitLine: { show: false }
                }
            ],
            title: {
                text: 'KTransformers Performance Optimization',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        };

        chart.setOption(option);
        this.charts.ktransformers = chart;

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // Edge Models Architecture Chart
    createEdgeModelsChart() {
        const chartElement = document.getElementById('edgeModelsChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#94a3b8' },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#16a085',
                textStyle: { color: '#ffffff' }
            },
            series: [{
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                data: [
                    // Source layer
                    { name: 'Small Language Models', value: 100 },
                    { name: 'Vision-Language Models', value: 80 },
                    { name: 'TTS Models', value: 60 },
                    { name: 'ASR Models', value: 70 },
                    { name: 'Voice Cloning', value: 40 },
                    
                    // Optimization layer
                    { name: 'Model Quantization', value: 120 },
                    { name: 'Collaborative Compression', value: 90 },
                    { name: 'Hardware Acceleration', value: 110 },
                    { name: 'Memory Optimization', value: 130 },
                    
                    // Platform layer
                    { name: 'MacBook/AI PC', value: 100 },
                    { name: 'Embedded Edge', value: 80 },
                    { name: 'Mobile Devices', value: 90 },
                    { name: 'AI Appliances', value: 70 },
                    
                    // Use cases
                    { name: 'Real-time Interpreter', value: 60 },
                    { name: 'Personal Assistant', value: 70 },
                    { name: 'Call Center AI', value: 80 },
                    { name: 'Education Tools', value: 50 }
                ],
                links: [
                    // Models to Optimizations
                    { source: 'Small Language Models', target: 'Model Quantization', value: 50 },
                    { source: 'Small Language Models', target: 'Hardware Acceleration', value: 50 },
                    { source: 'Vision-Language Models', target: 'Memory Optimization', value: 40 },
                    { source: 'Vision-Language Models', target: 'Hardware Acceleration', value: 40 },
                    { source: 'TTS Models', target: 'Collaborative Compression', value: 30 },
                    { source: 'TTS Models', target: 'Model Quantization', value: 30 },
                    { source: 'ASR Models', target: 'Hardware Acceleration', value: 35 },
                    { source: 'ASR Models', target: 'Memory Optimization', value: 35 },
                    { source: 'Voice Cloning', target: 'Model Quantization', value: 20 },
                    { source: 'Voice Cloning', target: 'Collaborative Compression', value: 20 },
                    
                    // Optimizations to Platforms
                    { source: 'Model Quantization', target: 'MacBook/AI PC', value: 40 },
                    { source: 'Model Quantization', target: 'Mobile Devices', value: 30 },
                    { source: 'Collaborative Compression', target: 'Embedded Edge', value: 25 },
                    { source: 'Collaborative Compression', target: 'AI Appliances', value: 25 },
                    { source: 'Hardware Acceleration', target: 'MacBook/AI PC', value: 35 },
                    { source: 'Hardware Acceleration', target: 'Mobile Devices', value: 35 },
                    { source: 'Memory Optimization', target: 'Embedded Edge', value: 40 },
                    { source: 'Memory Optimization', target: 'AI Appliances', value: 30 },
                    
                    // Platforms to Use Cases
                    { source: 'MacBook/AI PC', target: 'Real-time Interpreter', value: 30 },
                    { source: 'MacBook/AI PC', target: 'Personal Assistant', value: 35 },
                    { source: 'Embedded Edge', target: 'Personal Assistant', value: 25 },
                    { source: 'Embedded Edge', target: 'Education Tools', value: 25 },
                    { source: 'Mobile Devices', target: 'Call Center AI', value: 40 },
                    { source: 'Mobile Devices', target: 'Real-time Interpreter', value: 30 },
                    { source: 'AI Appliances', target: 'Call Center AI', target: 40 },
                    { source: 'AI Appliances', target: 'Education Tools', value: 25 }
                ],
                itemStyle: {
                    color: function(params) {
                        const colors = ['#27ae60', '#16a085', '#2ecc71', '#1abc9c', '#3498db', '#2980b9', '#9b59b6', '#8e44ad'];
                        return colors[params.dataIndex % colors.length];
                    }
                },
                lineStyle: {
                    color: 'gradient',
                    curveness: 0.5,
                    opacity: 0.6
                },
                label: {
                    color: '#ffffff',
                    fontSize: 12
                }
            }],
            title: {
                text: 'Edge AI Deployment Flow',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        };

        chart.setOption(option);
        this.charts.edgeModels = chart;

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // MoFA Framework Chart
    createMoFAFrameworkChart() {
        const chartElement = document.getElementById('mofaFrameworkChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#94a3b8' },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#e74c3c',
                textStyle: { color: '#ffffff' }
            },
            series: [{
                type: 'graph',
                layout: 'circular',
                animation: true,
                roam: true,
                draggable: true,
                focusNodeAdjacency: true,
                circular: {
                    rotateLabel: true
                },
                data: [
                    // Agent types
                    { 
                        name: 'Simple Agent', 
                        symbolSize: 70,
                        itemStyle: { color: '#e74c3c' },
                        category: 0
                    },
                    { 
                        name: 'Composite Agent', 
                        symbolSize: 80,
                        itemStyle: { color: '#e74c3c' },
                        category: 0
                    },
                    { 
                        name: 'Super Agent', 
                        symbolSize: 90,
                        itemStyle: { color: '#e74c3c' },
                        category: 0
                    },
                    { 
                        name: 'Meta Agent', 
                        symbolSize: 100,
                        itemStyle: { color: '#e74c3c' },
                        category: 0
                    },

                    // Dataflow components
                    { 
                        name: 'Nodes', 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Edges', 
                        symbolSize: 60,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Graphs', 
                        symbolSize: 80,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'Shared Memory', 
                        symbolSize: 70,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    { 
                        name: 'TCP Communication', 
                        symbolSize: 70,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },

                    // Development tools
                    { 
                        name: 'YAML Config', 
                        symbolSize: 60,
                        itemStyle: { color: '#16a085' },
                        category: 2
                    },
                    { 
                        name: 'Stage GUI', 
                        symbolSize: 70,
                        itemStyle: { color: '#16a085' },
                        category: 2
                    },
                    { 
                        name: 'Python SDK', 
                        symbolSize: 80,
                        itemStyle: { color: '#16a085' },
                        category: 2
                    },
                    { 
                        name: 'Rust SDK', 
                        symbolSize: 70,
                        itemStyle: { color: '#16a085' },
                        category: 2
                    },

                    // Enterprise features
                    { 
                        name: 'Stateless Design', 
                        symbolSize: 80,
                        itemStyle: { color: '#9b59b6' },
                        category: 3
                    },
                    { 
                        name: 'OpenTelemetry', 
                        symbolSize: 70,
                        itemStyle: { color: '#9b59b6' },
                        category: 3
                    },
                    { 
                        name: 'Hot-Swap', 
                        symbolSize: 70,
                        itemStyle: { color: '#9b59b6' },
                        category: 3
                    },
                    { 
                        name: 'Cloud Native', 
                        symbolSize: 80,
                        itemStyle: { color: '#9b59b6' },
                        category: 3
                    },

                    // Pre-built nodes
                    { 
                        name: 'LLM API Calls', 
                        symbolSize: 70,
                        itemStyle: { color: '#f39c12' },
                        category: 4
                    },
                    { 
                        name: 'Tool Integration', 
                        symbolSize: 70,
                        itemStyle: { color: '#f39c12' },
                        category: 4
                    },
                    { 
                        name: 'Terminal I/O', 
                        symbolSize: 60,
                        itemStyle: { color: '#f39c12' },
                        category: 4
                    },
                    { 
                        name: 'Data Processing', 
                        symbolSize: 70,
                        itemStyle: { color: '#f39c12' },
                        category: 4
                    },
                    { 
                        name: 'CRM Integration', 
                        symbolSize: 70,
                        itemStyle: { color: '#f39c12' },
                        category: 4
                    }
                ],
                links: [
                    // Agent composition
                    { source: 'Simple Agent', target: 'Nodes' },
                    { source: 'Composite Agent', target: 'Graphs' },
                    { source: 'Super Agent', target: 'Graphs' },
                    { source: 'Meta Agent', target: 'Graphs' },
                    
                    // Dataflow connections
                    { source: 'Nodes', target: 'YAML Config' },
                    { source: 'Nodes', target: 'Python SDK' },
                    { source: 'Nodes', target: 'Rust SDK' },
                    { source: 'Graphs', target: 'Stage GUI' },
                    { source: 'Shared Memory', target: 'Stateless Design' },
                    { source: 'TCP Communication', target: 'Stateless Design' },
                    
                    // Enterprise features
                    { source: 'Stateless Design', target: 'LLM API Calls' },
                    { source: 'OpenTelemetry', target: 'Tool Integration' },
                    { source: 'Hot-Swap', target: 'Terminal I/O' },
                    { source: 'Cloud Native', target: 'Data Processing' },
                    { source: 'Cloud Native', target: 'CRM Integration' }
                ],
                categories: [
                    { name: 'Agents', itemStyle: { color: '#e74c3c' } },
                    { name: 'Dataflow', itemStyle: { color: '#3498db' } },
                    { name: 'Development', itemStyle: { color: '#16a085' } },
                    { name: 'Enterprise', itemStyle: { color: '#9b59b6' } },
                    { name: 'Nodes', itemStyle: { color: '#f39c12' } }
                ],
                lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                    opacity: 0.6
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 3,
                        opacity: 1
                    }
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#ffffff',
                    fontSize: 11
                }
            }],
            title: {
                text: 'MoFA Agent Framework Architecture',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        };

        chart.setOption(option);
        this.charts.mofaFramework = chart;

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // Moly Server API Chart
    createMolyServerChart() {
        const chartElement = document.getElementById('molyServerChart');
        if (!chartElement) return;

        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            textStyle: { color: '#94a3b8' },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(26, 29, 41, 0.9)',
                borderColor: '#9b59b6',
                textStyle: { color: '#ffffff' }
            },
            legend: {
                data: ['Request Rate', 'Response Time', 'Throughput'],
                textStyle: { color: '#94a3b8' },
                top: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['HTTP/REST', 'WebSocket', 'WebRTC', 'SIP Integration'],
                axisLine: { lineStyle: { color: '#334155' } },
                axisLabel: { color: '#94a3b8' }
            },
            yAxis: [
                {
                    type: 'value',
                    name: 'Requests/sec',
                    nameTextStyle: { color: '#94a3b8' },
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' },
                    splitLine: { lineStyle: { color: '#334155', type: 'dashed' } }
                },
                {
                    type: 'value',
                    name: 'Latency (ms)',
                    nameTextStyle: { color: '#94a3b8' },
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' },
                    splitLine: { show: false }
                }
            ],
            series: [
                {
                    name: 'Request Rate',
                    type: 'bar',
                    data: [1000, 500, 200, 100],
                    itemStyle: { 
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#9b59b6' },
                            { offset: 1, color: '#8e44ad' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    }
                },
                {
                    name: 'Response Time',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [50, 30, 20, 100],
                    lineStyle: { color: '#f39c12', width: 3 },
                    itemStyle: { color: '#f39c12' },
                    smooth: true
                },
                {
                    name: 'Throughput',
                    type: 'line',
                    data: [800, 400, 150, 80],
                    lineStyle: { color: '#27ae60', width: 3 },
                    itemStyle: { color: '#27ae60' },
                    smooth: true
                }
            ],
            title: {
                text: 'Moly Server API Performance',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        };

        chart.setOption(option);
        this.charts.molyServer = chart;

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    // Resize all charts
    resizeAllCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
                chart.resize();
            }
        });
    }

    // Destroy all charts
    destroyAllCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.dispose === 'function') {
                chart.dispose();
            }
        });
        this.charts = {};
    }
}

// Initialize architecture charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for ECharts to be available
    if (typeof echarts !== 'undefined') {
        window.architectureCharts = new ArchitectureCharts();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.architectureCharts) {
                window.architectureCharts.resizeAllCharts();
            }
        });
    } else {
        // Retry after a short delay if ECharts is not yet available
        setTimeout(() => {
            if (typeof echarts !== 'undefined') {
                window.architectureCharts = new ArchitectureCharts();
            }
        }, 1000);
    }
});