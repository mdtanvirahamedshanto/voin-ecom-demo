
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrackingForm from '@/components/tracking/TrackingForm';
import OrderStatus from '@/components/tracking/OrderStatus';

const OrderTracking = () => {
  const [trackingData, setTrackingData] = useState(null);

  const handleTrackOrder = (orderId: string, phone: string) => {
    // Mock tracking data with updated images
    const mockData = {
      orderId: orderId || 'VOIN1234567890',
      customerName: 'John Doe',
      phone: phone || '+880 1234-567890',
      status: 'shipped',
      estimatedDelivery: 'Tomorrow, Dec 28',
      items: [
        {
          id: 1,
          name: 'Bold Statement',
          image: 'https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000',
          size: 'M',
          color: 'Black',
          quantity: 2
        },
        {
          id: 2,
          name: 'Calm Vibes',
          image: 'https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000',
          size: 'L',
          color: 'White',
          quantity: 1
        }
      ],
      timeline: [
        {
          status: 'confirmed',
          title: 'Order Confirmed',
          description: 'Your order has been confirmed and is being prepared',
          timestamp: 'Dec 25, 2024 - 2:30 PM',
          completed: true
        },
        {
          status: 'processing',
          title: 'Order Processing',
          description: 'Your items are being prepared for shipment',
          timestamp: 'Dec 25, 2024 - 6:00 PM',
          completed: true
        },
        {
          status: 'shipped',
          title: 'Order Shipped',
          description: 'Your order is on its way to you',
          timestamp: 'Dec 26, 2024 - 9:00 AM',
          completed: true
        },
        {
          status: 'delivered',
          title: 'Order Delivered',
          description: 'Your order has been delivered successfully',
          timestamp: 'Estimated: Dec 28, 2024',
          completed: false
        }
      ]
    };

    setTrackingData(mockData);
  };

  const resetTracking = () => {
    setTrackingData(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-grotesk text-4xl md:text-5xl font-bold text-black mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your order details below to track your VOIN package and see its current status
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {!trackingData ? (
              <TrackingForm onTrackOrder={handleTrackOrder} />
            ) : (
              <OrderStatus data={trackingData} onNewSearch={resetTracking} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
