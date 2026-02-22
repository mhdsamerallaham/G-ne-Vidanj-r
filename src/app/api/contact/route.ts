import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  phone: z.string().regex(/^0?[5][0-9]{9}$/, 'Geçerli bir telefon numarası giriniz'),
  service: z.string().min(1, 'Hizmet seçiniz'),
  district: z.string().min(1, 'İlçe seçiniz'),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Log the contact data (in production, you'd save to database)
    console.log('New contact request:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      source: 'website'
    });

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send email notification
    // 3. Send SMS/WhatsApp notification
    // 4. Add to CRM system

    // For now, we'll just simulate success
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Form verileri geçersiz.',
          errors: error.issues
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API endpoint - POST only' 
    },
    { status: 405 }
  );
}
