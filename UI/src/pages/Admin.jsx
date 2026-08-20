import React, { useEffect, useState, useCallback } from "react";
import { Sprout, LogOut, Loader2, Trash2 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { apiGet, apiPatch, apiDelete } from "@/lib/api";

const BOOKING_STATUSES = ["pending", "confirmed", "approved", "cancelled", "completed"];
const CONTACT_STATUSES = ["new", "read", "archived"];

export default function Admin() {
  const { admin, logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [statsData, bookingsData, contactsData] = await Promise.all([
        apiGet("/api/admin/dashboard"),
        apiGet("/api/admin/bookings"),
        apiGet("/api/admin/contacts"),
      ]);
      setStats(statsData);
      setBookings(bookingsData);
      setContacts(contactsData);
    } catch {
      setError("Failed to load admin data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  async function updateBookingStatus(id, status) {
    const updated = await apiPatch(`/api/admin/bookings/${id}`, { status });
    setBookings((bs) => bs.map((b) => (b.id === id ? updated : b)));
  }

  async function deleteBooking(id) {
    await apiDelete(`/api/admin/bookings/${id}`);
    setBookings((bs) => bs.filter((b) => b.id !== id));
  }

  async function updateContactStatus(id, status) {
    const updated = await apiPatch(`/api/admin/contacts/${id}`, { status });
    setContacts((cs) => cs.map((c) => (c.id === id ? updated : c)));
  }

  async function deleteContact(id) {
    await apiDelete(`/api/admin/contacts/${id}`);
    setContacts((cs) => cs.filter((c) => c.id !== id));
  }

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-ibe-bone">
        <Loader2 className="animate-spin text-ibe-ever" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ibe-bone font-mulish">
      <header className="bg-ibe-ever text-ibe-cream">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-ibe-spring grid place-items-center"><Sprout className="text-ibe-bark" size={18} /></span>
            <div className="leading-tight">
              <div className="font-lora text-lg font-bold">I&amp;B Evergreen Admin</div>
              <div className="text-xs text-ibe-cream/60">{admin?.email}</div>
            </div>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ibe-cream/30 text-sm font-bold hover:bg-ibe-cream/10 transition">
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-6 lg:px-8 py-10">
        {error && <p className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
            <StatTile label="Total" value={stats.total_bookings} />
            <StatTile label="Pending" value={stats.pending} />
            <StatTile label="Approved" value={stats.approved} />
            <StatTile label="Completed" value={stats.completed} />
            <StatTile label="Cancelled" value={stats.cancelled} />
            <StatTile label="Contacts" value={stats.total_contacts} />
          </div>
        )}

        <section className="mb-12">
          <h2 className="font-lora text-ibe-ever text-2xl font-bold mb-4">Bookings</h2>
          <div className="bg-ibe-cream rounded-2xl border border-ibe-bark/5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ibe-bark/50 uppercase text-xs tracking-wider border-b border-ibe-bark/10">
                  <th className="p-4">Reference</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Address</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Status</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 && (
                  <tr><td colSpan={7} className="p-6 text-center text-ibe-bark/50">No bookings yet.</td></tr>
                )}
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-ibe-bark/5 last:border-0">
                    <td className="p-4 font-bold text-ibe-ever">{b.reference}</td>
                    <td className="p-4">{b.name}</td>
                    <td className="p-4">
                      <div>{b.email}</div>
                      <div className="text-ibe-bark/50">{b.phone}</div>
                    </td>
                    <td className="p-4 max-w-[200px]">{b.address}</td>
                    <td className="p-4 max-w-[200px]">{b.service}</td>
                    <td className="p-4">
                      <select value={b.status} onChange={(e) => updateBookingStatus(b.id, e.target.value)} className="rounded-md border border-ibe-bark/15 px-2 py-1.5 bg-white">
                        {BOOKING_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="p-4">
                      <button onClick={() => deleteBooking(b.id)} className="text-ibe-bark/40 hover:text-red-600 transition"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-lora text-ibe-ever text-2xl font-bold mb-4">Contacts</h2>
          <div className="bg-ibe-cream rounded-2xl border border-ibe-bark/5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ibe-bark/50 uppercase text-xs tracking-wider border-b border-ibe-bark/10">
                  <th className="p-4">Name</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 && (
                  <tr><td colSpan={6} className="p-6 text-center text-ibe-bark/50">No contact messages yet.</td></tr>
                )}
                {contacts.map((c) => (
                  <tr key={c.id} className="border-b border-ibe-bark/5 last:border-0">
                    <td className="p-4">{c.name}</td>
                    <td className="p-4">
                      <div>{c.email}</div>
                      <div className="text-ibe-bark/50">{c.phone}</div>
                    </td>
                    <td className="p-4">{c.subject}</td>
                    <td className="p-4 max-w-[280px] truncate">{c.message}</td>
                    <td className="p-4">
                      <select value={c.status} onChange={(e) => updateContactStatus(c.id, e.target.value)} className="rounded-md border border-ibe-bark/15 px-2 py-1.5 bg-white">
                        {CONTACT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="p-4">
                      <button onClick={() => deleteContact(c.id)} className="text-ibe-bark/40 hover:text-red-600 transition"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatTile({ label, value }) {
  return (
    <div className="bg-ibe-cream rounded-xl border border-ibe-bark/5 p-4 text-center">
      <div className="font-lora text-ibe-ever text-2xl font-bold">{value}</div>
      <div className="text-ibe-bark/50 text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
