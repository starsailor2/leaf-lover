import { NextRequest, NextResponse } from 'next/server';
import { InquiryStore } from '@/lib/store';
import { ServiceInquiry } from '@/lib/types';

export async function GET() {
  try {
    const inquiries = InquiryStore.getAll();
    return NextResponse.json({ success: true, inquiries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      serviceType,
      name,
      phone,
      email,
      location,
      message,
      balconyDetails,
      businessDetails,
      plantDoctorDetails,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone Number are required.' },
        { status: 400 }
      );
    }

    const newInquiry: ServiceInquiry = {
      id: `inq-${Date.now()}`,
      serviceType: serviceType || 'general',
      name,
      phone,
      email: email || '',
      location: location || '',
      message: message || '',
      balconyDetails,
      businessDetails,
      plantDoctorDetails,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    const saved = InquiryStore.create(newInquiry);

    return NextResponse.json({
      success: true,
      inquiry: saved,
    });
  } catch (error: any) {
    console.error('Inquiry error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
