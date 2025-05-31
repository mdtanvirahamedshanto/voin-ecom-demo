
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Eye, EyeOff, ShoppingCart, ClipboardList, Globe } from 'lucide-react';

const StaffLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const demoAccounts = [
    {
      role: 'Purchase Manager',
      email: 'purchase@voin.com',
      password: 'purchase123',
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-800',
      access: 'Purchase Management, Inventory, Supplier Data'
    },
    {
      role: 'Order Manager',
      email: 'orders@voin.com',
      password: 'orders123',
      icon: ClipboardList,
      color: 'bg-green-100 text-green-800',
      access: 'Order Processing, Customer Management, Delivery Tracking'
    },
    {
      role: 'Website Manager',
      email: 'website@voin.com',
      password: 'website123',
      icon: Globe,
      color: 'bg-purple-100 text-purple-800',
      access: 'Content Management, Product Display, SEO Settings'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const authenticateUser = (email: string, password: string) => {
    const account = demoAccounts.find(acc => acc.email === email && acc.password === password);
    return account ? account.role : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Authenticate user and get role
    const userRole = authenticateUser(formData.email, formData.password);
    
    setTimeout(() => {
      if (userRole) {
        // Store the role in localStorage for the dashboard to access
        localStorage.setItem('staff_role', userRole);
        localStorage.setItem('staff_token', 'authenticated');
        navigate('/staff-dashboard');
      } else {
        alert('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const fillCredentials = (email: string, password: string) => {
    setFormData({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-grotesk text-4xl font-bold text-black mb-2">
            VOIN
          </h1>
          <p className="text-gray-600">Staff Portal</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Login Form */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-black">
                Staff Login
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Access your assigned modules and permissions based on your role
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
                      placeholder="staff@voin.com"
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
                  className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 transition-colors"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              {/* Admin Login Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Administrator?{' '}
                  <button
                    onClick={() => navigate('/admin-login')}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demo Accounts */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-black">
                Demo Staff Accounts
              </CardTitle>
              <p className="text-sm text-gray-600">
                Click any account below to auto-fill credentials
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {demoAccounts.map((account, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => fillCredentials(account.email, account.password)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <account.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-black">{account.role}</h4>
                        <Badge className={account.color}>{account.role.split(' ')[0]}</Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{account.access}</p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div><strong>Email:</strong> {account.email}</div>
                        <div><strong>Password:</strong> {account.password}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
