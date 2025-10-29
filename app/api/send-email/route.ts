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

// Interfaz para la respuesta de la API
interface ApiResponse {
  success: boolean
  message?: string
  error?: string
  details?: any
  messageId?: string
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

// Configuración de CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400' // 24 horas
}

// Handler para OPTIONS (preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders
  })
}

// Función para crear una respuesta HTTP estandarizada
function createResponse(
  data: ApiResponse,
  status: number = 200,
  headers: Record<string, string> = {}
): NextResponse {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
      ...headers
    }
  })
}

// Función para validar el correo electrónico
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Función para validar los datos del formulario
function validateFormData(data: Partial<FormData>): { isValid: boolean; error?: string } {
  if (!data.nombreEmpresa?.trim()) {
    return { isValid: false, error: 'El nombre de la empresa es requerido' }
  }
  if (!data.correo?.trim()) {
    return { isValid: false, error: 'El correo electrónico es requerido' }
  }
  if (!isValidEmail(data.correo)) {
    return { isValid: false, error: 'El correo electrónico no es válido' }
  }
  if (!data.objetoSocial?.trim()) {
    return { isValid: false, error: 'El objeto social es requerido' }
  }
  if (!data.tipoMercancia?.trim()) {
    return { isValid: false, error: 'El tipo de mercancía es requerido' }
  }
  if (!data.capacidadAlmacenamiento?.trim()) {
    return { isValid: false, error: 'La capacidad de almacenamiento es requerida' }
  }
  if (!data.frecuenciaEnvio?.trim()) {
    return { isValid: false, error: 'La frecuencia de envío es requerida' }
  }
  return { isValid: true }
}

// Handler GET para verificar que el endpoint está activo
export async function GET() {
  return createResponse({
    success: true,
    message: 'API de envío de correos funcionando correctamente',
    environment: process.env.NODE_ENV || 'development'
  })
}

// Handler POST para enviar el correo
export async function POST(request: NextRequest) {

  // Validar método de la solicitud
  if (request.method !== 'POST') {
    return createResponse(
      { success: false, error: 'Método no permitido' },
      405,
      { 'Allow': 'POST, OPTIONS' }
    )
  }

  try {
    // Validar que las variables de entorno estén configuradas
    const requiredEnvVars = {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
      EMAIL_TO: process.env.EMAIL_TO
    }
    
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([_, value]) => !value)
      .map(([key]) => key)
    
    if (missingVars.length > 0) {
      console.error('❌ Variables de entorno faltantes:', missingVars)
      return createResponse(
        {
          success: false,
          error: 'Configuración de correo incompleta',
          details: `Faltan las siguientes variables de entorno: ${missingVars.join(', ')}`
        },
        500
      )
    }

    // Obtener y validar los datos del formulario
    let data: FormData
    try {
      data = await request.json()
      
      // Validar datos requeridos
      const validation = validateFormData(data)
      if (!validation.isValid && validation.error) {
        console.error('❌ Validación fallida:', validation.error)
        return createResponse(
          {
            success: false,
            error: validation.error
          },
          400
        )
      }
    } catch (error) {
      console.error('❌ Error al procesar la solicitud:', error)
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al procesar la solicitud'
      return createResponse(
        {
          success: false,
          error: 'Error al procesar los datos del formulario',
          details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
        },
        400
      )
    }

    // Configurar el transportador de nodemailer con opciones mejoradas
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        // Solo en desarrollo, en producción deberías usar un certificado válido
        rejectUnauthorized: process.env.NODE_ENV !== 'production'
      },
      pool: true, // Usar conexiones persistentes
      maxConnections: 1, // Máximo de conexiones concurrentes
      maxMessages: 5, // Máximo de mensajes por conexión
      rateDelta: 1000, // Tiempo de espera entre mensajes (ms)
      rateLimit: 5, // Máximo de mensajes por rateDelta
      connectionTimeout: 10000, // 10 segundos
      greetingTimeout: 5000,    // 5 segundos
      socketTimeout: 10000,     // 10 segundos
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    })

    // Verificar la conexión con el servidor SMTP
    try {
      console.log('🔍 Verificando conexión con el servidor SMTP...')
      const isVerified = await transporter.verify()
      if (isVerified) {
        console.log('✅ Conexión con el servidor SMTP verificada correctamente')
      } else {
        console.warn('⚠️ La verificación del servidor SMTP no devolvió un resultado claro')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al verificar el servidor SMTP'
      console.error('❌ Error al verificar el servidor de correo:', errorMessage)
      
      // Intentar obtener más detalles del error
      let errorDetails = ''
      if (error instanceof Error) {
        errorDetails = error.stack || error.message
      } else if (typeof error === 'object' && error !== null) {
        errorDetails = JSON.stringify(error, null, 2)
      } else {
        errorDetails = String(error)
      }
      
      console.error('📋 Detalles del error de conexión SMTP:', errorDetails)
      
      return createResponse(
        {
          success: false,
          error: 'No se pudo conectar con el servidor de correo',
          details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
        },
        503 // Service Unavailable
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

    // Enviar el correo principal con manejo de errores
    try {
      console.log('📤 Enviando correo electrónico...')
      const info = await transporter.sendMail(mailOptions)
      
      if (info && info.messageId) {
        console.log('✅ Correo enviado exitosamente. ID del mensaje:', info.messageId)
        
        // Enviar correo de confirmación al cliente (sin esperar a que termine)
        sendConfirmationEmail(transporter, data).catch(confirmError => {
          console.warn('⚠️ No se pudo enviar el correo de confirmación:', confirmError)
        })
        
        return createResponse({
          success: true,
          message: '¡Mensaje enviado correctamente!',
          messageId: info.messageId
        })
      } else {
        console.error('❌ El servidor SMTP no devolvió un ID de mensaje válido')
        return createResponse(
          {
            success: false,
            error: 'Error al enviar el correo. Por favor, inténtalo de nuevo.'
          },
          500
        )
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al enviar el correo'
      console.error('❌ Error al enviar el correo:', errorMessage)
      
      // Intentar obtener más detalles del error
      let errorDetails = ''
      if (error instanceof Error) {
        errorDetails = error.stack || error.message
      } else if (typeof error === 'object' && error !== null) {
        errorDetails = JSON.stringify(error, null, 2)
      } else {
        errorDetails = String(error)
      }
      
      console.error('📋 Detalles del error de envío:', errorDetails)
      
      return createResponse(
        {
          success: false,
          error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
          details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
        },
        500
      )
    }

// Función para enviar correo de confirmación al cliente
async function sendConfirmationEmail(transporter: nodemailer.Transporter, data: FormData) {
  try {
    console.log('📨 Enviando correo de confirmación a:', data.correo)
    
    const info = await transporter.sendMail({
      from: `"${process.env.EMPRESA_NOMBRE || 'Tu Empresa'}" <${process.env.EMAIL_USER}>`,
      to: data.correo,
      subject: '✅ Hemos recibido tu solicitud',
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de Solicitud</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ✅ ¡Solicitud Recibida!
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                ${process.env.EMPRESA_NOMBRE || 'Gracias por contactarnos'}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #333333; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #667eea;">
                Hola ${data.nombreEmpresa || 'Cliente'},
              </h2>
              
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Gracias por contactarte con nosotros. Hemos recibido tu solicitud y nuestro equipo la está revisando con atención.
              </p>
              
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #333333; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
                  📋 Resumen de tu solicitud
                </h3>
                <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; color: #555555;">
                  <tr>
                    <td width="40%" style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Empresa:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${data.nombreEmpresa || 'No especificado'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Correo:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${data.correo || 'No especificado'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Tipo de Mercancía:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${data.tipoMercancia || 'No especificado'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Capacidad:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${data.capacidadAlmacenamiento || 'No especificada'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Frecuencia:</strong></td>
                    <td style="padding: 8px 0;">${data.frecuenciaEnvio || 'No especificada'}</td>
                  </tr>
                </table>
              </div>
              
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                Nos pondremos en contacto contigo a la brevedad para discutir los detalles de tu servicio de envío.
              </p>
              
              <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                Si tienes alguna pregunta adicional, no dudes en responder a este correo.
              </p>
              
              <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                Saludos cordiales,<br>
                <strong>${process.env.EMPRESA_NOMBRE || 'El equipo de atención al cliente'}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                Este es un correo automático, por favor no respondas a este mensaje.<br>
                Fecha de envío: ${new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
      // Versión de texto plano para clientes de correo que no soportan HTML
      text: `
Hola ${data.nombreEmpresa || 'Cliente'},

Gracias por contactarte con nosotros. Hemos recibido tu solicitud y nuestro equipo la está revisando con atención.

RESUMEN DE TU SOLICITUD
----------------------
Empresa: ${data.nombreEmpresa || 'No especificado'}
Correo: ${data.correo || 'No especificado'}
Tipo de Mercancía: ${data.tipoMercancia || 'No especificado'}
Capacidad: ${data.capacidadAlmacenamiento || 'No especificada'}
Frecuencia: ${data.frecuenciaEnvio || 'No especificada'}

Nos pondremos en contacto contigo a la brevedad para discutir los detalles de tu servicio de envío.

Si tienes alguna pregunta adicional, no dudes en responder a este correo.

Saludos cordiales,
${process.env.EMPRESA_NOMBRE || 'El equipo de atención al cliente'}

---
Este es un correo automático, por favor no respondas a este mensaje.
      `.trim()
    })
    
    console.log('✅ Correo de confirmación enviado correctamente a:', data.correo)
    return true
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    console.error('❌ Error al enviar correo de confirmación:', errorMessage)
    return false
  }
}

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido en el servidor'
    console.error('❌ Error en el servidor:', errorMessage)
    
    // Intentar obtener más detalles del error
    let errorDetails = ''
    if (error instanceof Error) {
      errorDetails = error.stack || error.message
    } else if (typeof error === 'object' && error !== null) {
      errorDetails = JSON.stringify(error, null, 2)
    } else {
      errorDetails = String(error)
    }
    
    console.error('📋 Detalles del error del servidor:', errorDetails)
    
    return createResponse(
      {
        success: false,
        error: 'Ha ocurrido un error en el servidor. Por favor, inténtalo de nuevo más tarde.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      500
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