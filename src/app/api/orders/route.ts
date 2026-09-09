import { NextRequest, NextResponse } from 'next/server';
import { OrderStore, ProductStore } from '@/lib/store';
import { Order } from '@/lib/types';

export async function GET() {
  try {
    const orders = OrderStore.getAll();
    return NextResponse.json({ success: true, orders });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, items, subtotal, deliveryFee, total, paymentMethod } = body;

    if (!customer || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Customer details and cart items are required.' },
        { status: 400 }
      );
    }

    // Validate and decrement stock
    const stockItems = items.map((i: any) => ({
      productId: i.product.id,
      quantity: i.quantity,
    }));

    const stockUpdated = ProductStore.decrementStock(stockItems);
    if (!stockUpdated) {
      return NextResponse.json(
        { success: false, error: 'One or more items in your cart are out of stock or have insufficient inventory.' },
        { status: 409 }
      );
    }

    // Create unique order ID
    const orderId = `LL-${Date.now().toString().slice(-6)}`;

    const newOrder: Order = {
      id: orderId,
      customer,
      items,
      subtotal,
      deliveryFee,
      total,
      paymentMethod: paymentMethod || 'online',
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      orderStatus: 'received',
      createdAt: new Date().toISOString(),
    };

    const savedOrder = OrderStore.create(newOrder);

    return NextResponse.json({
      success: true,
      order: savedOrder,
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
