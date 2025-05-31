
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react';

interface OrderStatusProps {
  data: {
    orderId: string;
    customerName: string;
    phone: string;
    status: string;
    estimatedDelivery: string;
    items: any[];
    timeline: any[];
  };
  onNewSearch: () => void;
}

const OrderStatus = ({ data, onNewSearch }: OrderStatusProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'processing':
        return Package;
      case 'shipped':
        return Truck;
      case 'delivered':
        return CheckCircle;
      default:
        return Package;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'shipped':
        return 'bg-purple-500';
      case 'delivered':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCurrentStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Order Confirmed</Badge>;
      case 'processing':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Processing</Badge>;
      case 'shipped':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Shipped</Badge>;
      case 'delivered':
        return <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" onClick={onNewSearch} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            New Search
          </Button>
          {getCurrentStatusBadge(data.status)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-grotesk text-2xl font-bold text-voin-black mb-2">
              Order #{data.orderId}
            </h2>
            <p className="text-gray-600">Customer: {data.customerName}</p>
            <p className="text-gray-600">Phone: {data.phone}</p>
          </div>
          
          <div className="text-md-right">
            <p className="text-gray-600">Estimated Delivery</p>
            <p className="font-grotesk text-xl font-bold text-voin-red">
              {data.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-grotesk text-xl font-bold text-voin-black mb-4">
          Order Items
        </h3>
        
        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-grotesk text-xl font-bold text-voin-black mb-6">
          Order Timeline
        </h3>
        
        <div className="space-y-6">
          {data.timeline.map((step, index) => {
            const Icon = getStatusIcon(step.status);
            return (
              <div key={index} className="flex gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step.completed ? getStatusColor(step.status) : 'bg-gray-200'
                }`}>
                  <Icon className={`w-6 h-6 ${step.completed ? 'text-white' : 'text-gray-400'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-semibold ${
                      step.completed ? 'text-voin-black' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h4>
                    {step.completed && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className={`text-sm ${
                    step.completed ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                  <p className={`text-xs ${
                    step.completed ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {step.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gradient-to-r from-voin-red to-orange-500 rounded-2xl p-6 text-white text-center">
        <h3 className="font-grotesk text-xl font-bold mb-2">Need Help?</h3>
        <p className="mb-4">Our support team is here to help you</p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary">
            WhatsApp Support
          </Button>
          <Button variant="secondary">
            Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
