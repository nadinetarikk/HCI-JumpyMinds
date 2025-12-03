import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Eraser, Trash2, Download, Sparkles, Undo, Redo } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import brainMascotImage from 'figma:asset/e1e39d682bcad6a3c687f8afc8b31c266870e0eb.png';
import artBrainImage from 'figma:asset/160474e3c2b69e42d79ec725381e420850be6f5a.png';

export default function CreativeDrawing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FF6B3D');
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState<'brush' | 'eraser'>('brush');
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const [encouragementMessage, setEncouragementMessage] = useState('');

  const colors = [
    '#FF6B3D', // Orange
    '#4DB8C1', // Teal
    '#FF69B4', // Pink
    '#9B59B6', // Purple
    '#3498DB', // Blue
    '#2ECC71', // Green
    '#F1C40F', // Yellow
    '#E74C3C', // Red
    '#95A5A6', // Gray
    '#34495E', // Dark Blue
    '#000000', // Black
    '#FFFFFF', // White
  ];

  const encouragementMessages = [
    'Your creativity is amazing!',
    'What a wonderful drawing!',
    'You have great artistic talent!',
    'Keep creating beautiful art!',
    'I love your imagination!',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Fill with white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Save initial state
        saveToHistory();
      }
    }
  }, []);

  const saveToHistory = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const newHistory = history.slice(0, historyStep + 1);
        newHistory.push(imageData);
        setHistory(newHistory);
        setHistoryStep(newHistory.length - 1);
      }
    }
  };

  const undo = () => {
    if (historyStep > 0) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const newStep = historyStep - 1;
          ctx.putImageData(history[newStep], 0, 0);
          setHistoryStep(newStep);
        }
      }
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const newStep = historyStep + 1;
          ctx.putImageData(history[newStep], 0, 0);
          setHistoryStep(newStep);
        }
      }
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.strokeStyle = tool === 'eraser' ? '#FFFFFF' : currentColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveToHistory();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        saveToHistory();
      }
    }
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `jumpy-minds-drawing-${Date.now()}.png`;
      link.href = url;
      link.click();
      
      // Show encouragement
      const message = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
      setEncouragementMessage(message);
      setTimeout(() => setEncouragementMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/child-dashboard">
                <img src={logoImage} alt="Jumpy Minds" className="h-10" />
              </Link>
            </div>
            <Link
              to="/child-dashboard"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[130px] h-[130px] flex items-center justify-center shrink-0">
            <img src={artBrainImage} alt="" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-3xl mb-2">Creative Drawing Studio</h1>
            <p className="text-gray-600">Let your imagination run wild!</p>
          </div>
        </div>

        {/* Encouragement Message */}
        {encouragementMessage && (
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-100 to-teal-100 border-2 border-orange-300 rounded-xl flex items-center gap-3 animate-bounce">
            <Sparkles className="w-6 h-6 text-orange-600" />
            <p className="text-lg">{encouragementMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <div className="lg:col-span-1 flex flex-col gap-[43px] h-full">
            {/* Tool Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="mb-4 flex items-center gap-2 text-[20px]">
                <Palette className="w-5 h-5" />
                Tools
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setTool('brush')}
                  className={`w-full py-3 px-4 rounded-lg flex items-center gap-3 transition-colors ${
                    tool === 'brush'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Palette className="w-5 h-5" />
                  Brush
                </button>
                <button
                  onClick={() => setTool('eraser')}
                  className={`w-full py-3 px-4 rounded-lg flex items-center gap-3 transition-colors ${
                    tool === 'eraser'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Eraser className="w-5 h-5" />
                  Eraser
                </button>
              </div>
            </div>

            {/* Brush Size */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="mb-4 text-[20px]">Brush Size</h3>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="mt-2 text-center">
                <span className="text-2xl">{brushSize}px</span>
              </div>
              <div className="mt-4 flex justify-center">
                <div
                  className="rounded-full bg-gray-800"
                  style={{ width: brushSize, height: brushSize }}
                />
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="mb-4 text-[20px]">Colors</h3>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setCurrentColor(color);
                      setTool('brush');
                    }}
                    className={`w-full aspect-square rounded-lg transition-transform hover:scale-110 ${
                      currentColor === color && tool === 'brush' ? 'ring-4 ring-offset-2 ring-orange-500' : ''
                    }`}
                    style={{
                      backgroundColor: color,
                      border: color === '#FFFFFF' ? '2px solid #ccc' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="mb-4 text-[20px]">Your Canvas</h3>
              <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white">
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full cursor-crosshair touch-none"
                  style={{ height: '600px' }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Use your mouse or finger to draw on the canvas!
              </p>
            </div>
          </div>
        </div>

        {/* Actions Section - Below Colors and Canvas */}
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
            <h3 className="mb-4 text-[20px]">Actions</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={undo}
                disabled={historyStep <= 0}
                className="flex-1 min-w-[200px] py-3 px-4 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Undo className="w-5 h-5" />
                Undo
              </button>
              <button
                onClick={redo}
                disabled={historyStep >= history.length - 1}
                className="flex-1 min-w-[200px] py-3 px-4 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Redo className="w-5 h-5" />
                Redo
              </button>
              <button
                onClick={clearCanvas}
                className="flex-1 min-w-[200px] py-3 px-4 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Clear Canvas
              </button>
              <button
                onClick={downloadDrawing}
                className="flex-1 min-w-[200px] py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                Save Drawing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
