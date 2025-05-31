
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      navigate('/admin');
      setIsLoading(false);
    }, 1500);
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'admin@voin.com',
      password: 'admin123'
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-grotesk text-4xl font-bold text-black mb-2">
            VOIN
          </h1>
          <p className="text-gray-600">Administrator Portal</p>
        </div>

        {/* Login Card */}
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-black">
              Admin Access
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Sign in to access the full administrative dashboard with complete system control
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="admin@voin.com"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 transition-colors"
              >
                {isLoading ? 'Signing In...' : 'Sign In as Admin'}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Demo Credentials</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Email:</strong> admin@voin.com</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={fillDemoCredentials}
                className="mt-2 text-xs"
              >
                Use Demo Credentials
              </Button>
            </div>

            {/* Staff Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Staff member?{' '}
                <button
                  onClick={() => navigate('/staff-login')}
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  Login here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
