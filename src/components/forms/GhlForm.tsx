'use client'

import Script from 'next/script'

// Both website forms are GoHighLevel embeds served from the client's branded
// domain (forms.reecegroupllc.com → GHL). Fields, spam protection, the owner
// notification email and the thank-you message are all managed inside the GHL
// sub-account (Reece Group LLC, location BI9mZnv3Higqz0x9v4io). This component
// only renders the iframe and loads GHL's form_embed.js, which listens for the
// form's postMessage and auto-resizes the iframe to fit.
//
// next/script dedupes the embed script across routes, so it is safe to render
// more than one form on a page or across pages. minHeight matches the form's
// natural height so the layout never collapses if the resize script is slow.
const FORM_HOST = 'https://forms.reecegroupllc.com'
const EMBED_SCRIPT = `${FORM_HOST}/js/form_embed.js`

export const GHL_FORMS = {
  // Dark estimate card in the homepage hero: Your Name, Phone Number, Service Needed
  hero: { id: 'jZwLm18Pr5jMY1CMRufb', name: 'Website Hero Form', height: 330 },
  // /contact page: Full Name, Phone Number, Email Address, Service Needed, Project Details
  contact: { id: 'VVU4dYmlCPXnDFsj8MQQ', name: 'Website Contact Form', height: 600 },
} as const

interface GhlFormProps {
  form: keyof typeof GHL_FORMS
}

export function GhlForm({ form }: GhlFormProps) {
  const { id, name, height } = GHL_FORMS[form]
  const iframeId = `inline-${id}`

  return (
    <>
      <iframe
        src={`${FORM_HOST}/widget/form/${id}`}
        id={iframeId}
        title={name}
        style={{
          width: '100%',
          minHeight: height,
          border: 'none',
          display: 'block',
          background: 'transparent',
          colorScheme: 'normal',
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={name}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={id}
      />
      <Script src={EMBED_SCRIPT} />
    </>
  )
}
