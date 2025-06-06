import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';
import { Clock, Brain, BarChart3 } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { setCurrentStep, hasCompletedAssessment } = useAppContext();

  const handleGetStarted = () => {
    setCurrentStep('assessment');
  };

  const handleViewResults = () => {
    setCurrentStep('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-8 px-8 pt-12">
          <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Curiosity Code Index®
            <br />
            Companion
          </CardTitle>
          <CardDescription className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Quickly identify what might be holding your curiosity back. This short assessment reveals how four key factors (Fear, Assumptions, Technology, and Environment) also known as FATE can influence how you think, learn, and lead.
          </CardDescription>
          
          {/* FATE Icons Grid */}
          <div className="grid grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <div className="text-white text-2xl">😟</div>
              </div>
              <span className="font-semibold text-gray-800">Fear</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <div className="text-white text-2xl">💭</div>
              </div>
              <span className="font-semibold text-gray-800">Assumptions</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <div className="text-white text-2xl">⚙️</div>
              </div>
              <span className="font-semibold text-gray-800">Technology</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                <div className="text-white text-2xl">👥</div>
              </div>
              <span className="font-semibold text-gray-800">Environment</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span className="font-medium">Takes just a few minutes</span>
            </div>
            <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <Brain className="w-5 h-5 mr-2 text-purple-500" />
              <span className="font-medium">Instantly shows how each factor impacts your curiosity</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-center pb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Take the Assessment
            </Button>
            {hasCompletedAssessment && (
              <Button 
                onClick={handleViewResults}
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl font-semibold rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View My Results
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;