// ═══════════════════════════════════════════════════════════
//  Small Shop Tees — Supabase Configuration
//  smallshoptees.com
// ═══════════════════════════════════════════════════════════
//
//  FIRST-TIME SETUP (5 minutes):
//
//  1. Go to https://supabase.com  →  sign up free
//  2. Click "New project"  →  name it "smallshoptees"
//  3. Wait ~2 min for your project to spin up
//  4. Go to:  Project Settings → API
//  5. Copy "Project URL"       →  paste as SUPABASE_URL below
//  6. Copy "anon / public" key →  paste as SUPABASE_ANON below
//  7. Commit + push to GitHub
//  8. Visit  https://smallshoptees.com/admin/  in your browser
//     and follow the SQL setup steps shown there
//  9. In Supabase Dashboard → Authentication → Users
//     click "Invite user" and use the email set as ADMIN_EMAIL below
//
// ═══════════════════════════════════════════════════════════

const SUPABASE_URL  = 'https://zehnrgcwbtjcqtyuzulz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplaG5yZ2N3YnRqY3F0eXV6dWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwODM5ODEsImV4cCI6MjA4ODY1OTk4MX0.8t-Ls9MhmBKTaC2HEzSwnJ8ISZVy1520druKYTtQi-s';
const ADMIN_EMAIL   = 'pineocoles@gmail.com';                  // ← your admin login email

// ── Create shared client (null if not yet configured) ──────
const _sb = (
  typeof supabase !== 'undefined' &&
  SUPABASE_URL !== 'https://your-project-ref.supabase.co'
) ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON) : null;

function sbReady() { return !!_sb; }
