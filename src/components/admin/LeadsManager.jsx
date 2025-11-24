"use client"

import { useState, useEffect } from "react"
import { FaSpinner, FaTrash } from "react-icons/fa"

export default function LeadsManager() {
  const [leads, setLeads] = useState([])
  const [contactLeads, setContactLeads] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const [leadsRes, contactRes] = await Promise.all([fetch("/api/leads"), fetch("/api/contact")])
      const leadsData = await leadsRes.json()
      const contactData = await contactRes.json()
      setLeads(leadsData.leads || [])
      setContactLeads(contactData.leads || [])
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id, type) => {
    if (confirm("Delete this lead?")) {
      try {
        const url = type === "booking" ? `/api/leads/${id}` : `/api/contact/${id}`
        await fetch(url, { method: "DELETE" })
        fetchLeads()
      } catch (error) {
        console.error("Delete error:", error)
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Booking Leads */}
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Booking Leads ({leads.length})</h2>

        {loading ? (
          <div className="flex justify-center py-8">
            <FaSpinner className="animate-spin text-accent-gold text-3xl" />
          </div>
        ) : leads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-warm-beige">
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Name</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Email</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Phone</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Service</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Preferred Date</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Date Received</th>
                  <th className="text-center py-3 px-4 font-bold text-charcoal">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="border-b border-warm-beige hover:bg-cream">
                    <td className="py-3 px-4 text-charcoal font-medium">
                      {lead.firstName} {lead.lastName}
                    </td>
                    <td className="py-3 px-4 text-charcoal">{lead.email}</td>
                    <td className="py-3 px-4 text-charcoal">{lead.phone}</td>
                    <td className="py-3 px-4 text-charcoal">{lead.service}</td>
                    <td className="py-3 px-4 text-charcoal">{new Date(lead.preferredDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-charcoal text-xs">{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDelete(lead._id, "booking")}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-charcoal text-center py-8">No booking leads yet.</p>
        )}
      </div>

      {/* Contact Form Leads */}
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Contact Form Submissions ({contactLeads.length})</h2>

        {contactLeads.length > 0 ? (
          <div className="space-y-4">
            {contactLeads.map((lead) => (
              <div key={lead._id} className="border border-warm-beige p-4 rounded hover:bg-cream transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-charcoal">{lead.name}</h3>
                    <p className="text-sm text-warm-beige">
                      {lead.email} • {lead.phone}
                    </p>
                  </div>
                  <button onClick={() => handleDelete(lead._id, "contact")} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </div>
                <p className="text-charcoal prose-text mb-2">{lead.message}</p>
                <p className="text-xs text-warm-beige">{new Date(lead.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-charcoal text-center py-8">No contact submissions yet.</p>
        )}
      </div>
    </div>
  )
}
