/*
  The enquiry form's prototype endpoint (data-endpoint on /contact). It checks the fields the form requires and
  answers, so system.js shows the sent line only after a real request; it stores and forwards nothing. The owner
  replaces this with the real inbox or form service before launch.
*/
const required = ['name', 'organisation', 'email', 'need', 'message', 'consent'] as const;

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ ok: false, error: 'Send the form as form data.' }, { status: 400 });
  }

  const missing = required.filter((name) => !String(data.get(name) ?? '').trim());
  const email = String(data.get('email') ?? '');
  if (missing.length || !/^[^\s@]+@[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, missing }, { status: 422 });
  }

  return Response.json({ ok: true, stored: false });
}
