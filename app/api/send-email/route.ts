import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Interface para los datos del formulario
interface FormData {
  nombreEmpresa: string
  correo: string
  objetoSocial: string
  tipoMercancia: string
  capacidadAlmacenamiento: string
  frecuenciaEnvio: string
  comentarios: string
}

// Función para generar el HTML del correo con diseño profesional
function generateEmailHTML(data: FormData): string {
  // Traducir valores a texto legible
  const capacidadTexto = {
    'semimasivo': 'Semimasivo (Camión pequeño)',
    'masivo': 'Masivo (Camión grande)'
  }[data.capacidadAlmacenamiento] || data.capacidadAlmacenamiento

  const frecuenciaTexto = {
    'poca': 'Poca frecuencia (ocasional)',
    'regular': 'Frecuencia regular (mensual)',
    'frecuente': 'Muy frecuente (semanal o más)'
  }[data.frecuenciaEnvio] || data.frecuenciaEnvio

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Solicitud Empresarial</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header con gradiente -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                🚚 Nueva Solicitud Empresarial
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                Formulario de envíos masivos
              </p>
            </td>
          </tr>

          <!-- Contenido -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Alerta de nueva solicitud -->
              <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin-bottom: 30px; border-radius: 4px;">
                <p style="margin: 0; color: #2e7d32; font-size: 14px; font-weight: bold;">
                  ✅ Se ha recibido una nueva solicitud de servicio empresarial
                </p>
              </div>

              <!-- Información del cliente -->
              <h2 style="color: #333333; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #667eea;">
                📋 Información del Cliente
              </h2>

              <table width="100%" cellpadding="10" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="40%" style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">🏢 Empresa:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px;">${data.nombreEmpresa}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">✉️ Correo:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${data.correo}" style="color: #667eea; text-decoration: none; font-size: 14px;">${data.correo}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">🎯 Objeto Social:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px;">${data.objetoSocial}</span>
                  </td>
                </tr>
              </table>

              <!-- Detalles del envío -->
              <h2 style="color: #333333; font-size: 20px; margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #667eea;">
                📦 Detalles del Envío
              </h2>

              <table width="100%" cellpadding="10" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="40%" style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">📦 Tipo de Mercancía:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px;">${data.tipoMercancia}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">🚛 Capacidad:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px; background-color: #e3f2fd; padding: 4px 12px; border-radius: 12px; display: inline-block;">${capacidadTexto}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">📅 Frecuencia:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px; background-color: #fff3e0; padding: 4px 12px; border-radius: 12px; display: inline-block;">${frecuenciaTexto}</span>
                  </td>
                </tr>
              </table>

              ${data.comentarios ? `
              <!-- Comentarios adicionales -->
              <h2 style="color: #333333; font-size: 20px; margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #667eea;">
                💬 Comentarios Adicionales
              </h2>
              <div style="background-color: #fafafa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.comentarios}</p>
              </div>
              ` : ''}

              <!-- Call to action -->
              <div style="text-align: center; margin: 30px 0 20px 0;">
                <a href="mailto:${data.correo}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                  📧 Responder al Cliente
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                Este correo fue enviado automáticamente desde el formulario empresarial de tu sitio web.<br>
                Fecha de recepción: ${new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Handler POST para enviar el correo
export async function POST(request: NextRequest) {
  try {
    // Validar que las variables de entorno estén configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_TO) {
      console.error('Variables de entorno faltantes:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
        EMAIL_TO: !!process.env.EMAIL_TO
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Configuración de correo incompleta. Por favor contacta al administrador.' 
        },
        { status: 500 }
      )
    }

    // Obtener los datos del formulario
    const data: FormData = await request.json()

    // Validar datos requeridos
    if (!data.nombreEmpresa || !data.correo || !data.objetoSocial || !data.tipoMercancia) {
      return NextResponse.json(
        { success: false, error: 'Datos del formulario incompletos' },
        { status: 400 }
      )
    }

    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verificar la conexión
    try {
      await transporter.verify()
      console.log('✅ Servidor de correo listo para enviar mensajes')
    } catch (error) {
      console.error('❌ Error al verificar el servidor de correo:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Error de configuración del servidor de correo. Verifica tus credenciales.' 
        },
        { status: 500 }
      )
    }

    // Configurar el correo
    const mailOptions = {
      from: `"${process.env.EMPRESA_NOMBRE || 'Formulario Empresarial'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.correo,
      subject: `🚚 Nueva Solicitud Empresarial - ${data.nombreEmpresa}`,
      html: generateEmailHTML(data),
      // Versión texto plano como fallback
      text: `
Nueva Solicitud Empresarial

INFORMACIÓN DEL CLIENTE:
- Empresa: ${data.nombreEmpresa}
- Correo: ${data.correo}
- Objeto Social: ${data.objetoSocial}

DETALLES DEL ENVÍO:
- Tipo de Mercancía: ${data.tipoMercancia}
- Capacidad: ${data.capacidadAlmacenamiento}
- Frecuencia: ${data.frecuenciaEnvio}

${data.comentarios ? `COMENTARIOS:\n${data.comentarios}` : ''}

---
Enviado: ${new Date().toLocaleString('es-ES')}
      `.trim(),
    }

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions)

    console.log('✅ Correo enviado exitosamente:', info.messageId)

    // Enviar correo de confirmación al cliente
    try {
      await transporter.sendMail({
        from: `"${process.env.EMPRESA_NOMBRE || 'Tu Empresa'}" <${process.env.EMAIL_USER}>`,
        to: data.correo,
        subject: '✅ Hemos recibido tu solicitud',
        html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">✅ ¡Solicitud Recibida!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #333333; font-size: 20px; margin: 0 0 15px 0;">Hola ${data.nombreEmpresa},</h2>
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Gracias por contactarnos. Hemos recibido tu solicitud empresarial y nuestro equipo la está revisando.
              </p>
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Nos pondremos en contacto contigo lo antes posible para discutir los detalles de tu servicio de envío.
              </p>
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6;">
                  <strong>Resumen de tu solicitud:</strong><br>
                  📦 Mercancía: ${data.tipoMercancia}<br>
                  🚛 Capacidad: ${data.capacidadAlmacenamiento}<br>
                  📅 Frecuencia: ${data.frecuenciaEnvio}
                </p>
              </div>
              <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                Saludos cordiales,<br>
                <strong>${process.env.EMPRESA_NOMBRE || 'El equipo'}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; color: #999999; font-size: 12px;">
                Este es un correo automático, por favor no responder.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
        text: `
Hola ${data.nombreEmpresa},

Gracias por contactarnos. Hemos recibido tu solicitud empresarial y nuestro equipo la está revisando.

Nos pondremos en contacto contigo lo antes posible.

Saludos cordiales,
${process.env.EMPRESA_NOMBRE || 'El equipo'}
        `.trim()
      })
      console.log('✅ Correo de confirmación enviado al cliente')
    } catch (confirmError) {
      console.warn('⚠️ No se pudo enviar el correo de confirmación al cliente:', confirmError)
      // No fallar la solicitud principal por esto
    }

    return NextResponse.json({
      success: true,
      message: 'Correo enviado exitosamente',
      messageId: info.messageId,
    })

  } catch (error) {
    console.error('❌ Error al enviar el correo:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Error al enviar el correo. Por favor intenta nuevamente.',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}

// Handler GET para verificar que el endpoint está activo
export async function GET() {
  return NextResponse.json({
    status: 'active',
    message: 'API de envío de correos empresariales',
    configured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.EMAIL_TO)
  })
}