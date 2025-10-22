import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Interface para los datos del formulario PQRS
interface PQRSFormData {
  nombre: string
  correo: string
  asunto: string
  mensaje: string
}

// Función para generar el HTML del correo PQRS con diseño profesional
function generatePQRSEmailHTML(data: PQRSFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva PQRS Recibida</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header con gradiente -->
          <tr>
            <td style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                📢 Nueva PQRS Recibida
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                Petición, Queja, Reclamo o Sugerencia
              </p>
            </td>
          </tr>

          <!-- Contenido -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Alerta de nueva PQRS -->
              <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 30px; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px; font-weight: bold;">
                  ⚠️ Se ha recibido una nueva PQRS que requiere atención
                </p>
              </div>

              <!-- Información del remitente -->
              <h2 style="color: #333333; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5576c;">
                👤 Información del Remitente
              </h2>

              <table width="100%" cellpadding="10" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="30%" style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">👤 Nombre:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px;">${data.nombre}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">✉️ Correo:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${data.correo}" style="color: #f5576c; text-decoration: none; font-size: 14px;">${data.correo}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8f9fa; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #555555; font-size: 14px;">📋 Asunto:</strong>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <span style="color: #333333; font-size: 14px; font-weight: 600;">${data.asunto}</span>
                  </td>
                </tr>
              </table>

              <!-- Mensaje de la PQRS -->
              <h2 style="color: #333333; font-size: 20px; margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5576c;">
                💬 Mensaje
              </h2>

              <div style="background-color: #fafafa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${data.mensaje}</p>
              </div>

              <!-- Call to action -->
              <div style="text-align: center; margin: 30px 0 20px 0;">
                <a href="mailto:${data.correo}?subject=Re: ${encodeURIComponent(data.asunto)}" style="display: inline-block; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(245, 87, 108, 0.3);">
                  📧 Responder al Cliente
                </a>
              </div>

              <!-- Nota de tiempo de respuesta -->
              <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; margin-top: 30px; border-radius: 4px;">
                <p style="margin: 0; color: #1565c0; font-size: 13px; line-height: 1.6;">
                  <strong>📌 Recordatorio:</strong> Las PQRS deben ser respondidas en un plazo máximo de 15 días hábiles según la normativa vigente.
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                Este correo fue enviado automáticamente desde el formulario PQRS de tu sitio web.<br>
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

// Handler POST para enviar el correo PQRS
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
    const data: PQRSFormData = await request.json()

    // Validar datos requeridos
    if (!data.nombre || !data.correo || !data.asunto || !data.mensaje) {
      return NextResponse.json(
        { success: false, error: 'Datos del formulario incompletos' },
        { status: 400 }
      )
    }

    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verificar la conexión
    try {
      await transporter.verify()
      console.log('✅ Servidor de correo listo para enviar PQRS')
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

    // Configurar el correo principal (al jefe)
    const mailOptions = {
      from: `"${process.env.EMPRESA_NOMBRE || 'Formulario PQRS'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.correo,
      subject: `📢 Nueva PQRS - ${data.asunto}`,
      html: generatePQRSEmailHTML(data),
      // Versión texto plano como fallback
      text: `
Nueva PQRS Recibida

INFORMACIÓN DEL REMITENTE:
- Nombre: ${data.nombre}
- Correo: ${data.correo}
- Asunto: ${data.asunto}

MENSAJE:
${data.mensaje}

---
Enviado: ${new Date().toLocaleString('es-ES')}
      `.trim(),
    }

    // Enviar el correo principal
    const info = await transporter.sendMail(mailOptions)

    console.log('✅ PQRS enviada exitosamente:', info.messageId)

    // Enviar correo de confirmación al cliente
    try {
      await transporter.sendMail({
        from: `"${process.env.EMPRESA_NOMBRE || 'Tu Empresa'}" <${process.env.EMAIL_USER}>`,
        to: data.correo,
        subject: '✅ Hemos recibido tu PQRS',
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
            <td style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">✅ ¡PQRS Recibida!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #333333; font-size: 20px; margin: 0 0 15px 0;">Hola ${data.nombre},</h2>
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Gracias por contactarnos. Hemos recibido tu ${data.asunto.toLowerCase()} y nuestro equipo la está revisando.
              </p>
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Te responderemos a la brevedad posible, en un plazo máximo de 15 días hábiles.
              </p>
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6;">
                  <strong>Resumen de tu solicitud:</strong><br>
                  📋 Asunto: ${data.asunto}<br>
                  📅 Fecha: ${new Date().toLocaleDateString('es-ES', { dateStyle: 'long' })}
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
Hola ${data.nombre},

Gracias por contactarnos. Hemos recibido tu ${data.asunto.toLowerCase()} y nuestro equipo la está revisando.

Te responderemos a la brevedad posible, en un plazo máximo de 15 días hábiles.

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
      message: 'PQRS enviada exitosamente',
      messageId: info.messageId,
    })

  } catch (error) {
    console.error('❌ Error al enviar la PQRS:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Error al enviar la PQRS. Por favor intenta nuevamente.',
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
    message: 'API de envío de PQRS',
    configured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.EMAIL_TO)
  })
}
