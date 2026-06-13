import InquiriesBrowser from "@/components/cms/InquiriesBrowser";

export const metadata = { title: "Inquiries — Studio CMS" };

/* mock inquiries — replace with live form submissions when wiring up */
const INQUIRIES = [
  { id: 1, name: "Dale Hutchins", business: "Hutchins Roofing", email: "dale@hutchinsroofing.com", phone: "(214) 555-0182", service: "Brand Access Program", budget: "$150/mo plan", date: "Jun 12", time: "9:41 AM", status: "new", source: "Brand Access quote form",
    message: "Saw the $150 down program and I'm interested. We've been running with a logo my nephew made in 2019 and we're losing bids to companies that look twice our size. How fast can we get started if I activate this week?",
    thread: [
      { from: "customer", date: "Jun 11", time: "4:02 PM", text: "Saw the $150 down program and I'm interested. We've been running with a logo my nephew made in 2019 and we're losing bids to companies that look twice our size. How fast can we get started if I activate this week?" },
      { from: "team", date: "Jun 11", time: "5:18 PM", text: "Hey Dale — great to hear from you. Short answer: the moment you activate, your project goes straight into production. No waiting on deposits to clear. If you activate today, our team starts concepts this week and you'll have full file access from day one. Want me to send the activation link?" },
      { from: "customer", date: "Jun 12", time: "8:55 AM", text: "That's faster than I expected. Yes, send it over. One more thing — we have two trucks that need wraps eventually. Can that be rolled into the program or is it billed separate?" },
      { from: "customer", date: "Jun 12", time: "9:41 AM", text: "Also just talked to my business partner, he's on board too. Ready to move when you are." },
      { from: "team", date: "Jun 12", time: "10:05 AM", text: "Love to hear it, Dale. Activation link is on its way to your inbox now. On the trucks — yes, wrap design can roll into the same plan. Once you're activated I'll have the team scope both trucks and you'll see the adjusted monthly before anything is billed." },
      { from: "customer", date: "Jun 12", time: "11:32 AM", text: "Got the link. Quick question before I pull the trigger — the $150/month, is there a minimum number of months or can we pay it off early if we have a good season?" },
      { from: "team", date: "Jun 12", time: "12:14 PM", text: "No minimum lock-in. You can pay the balance off early any time with zero penalty — plenty of owners knock it out after a strong quarter. And if you ever need to, you can cancel after the project completes." },
      { from: "customer", date: "Jun 12", time: "1:47 PM", text: "That's all I needed to hear. Activating now. Looking forward to it — make us look like the biggest roofing company in Texas." },
      { from: "team", date: "Jun 12", time: "2:02 PM", text: "Done deal. You're officially in production — kickoff questionnaire just landed in your inbox. Welcome to the program, Dale. 🤝" },
    ] },
  { id: 2, name: "Maria Cortez", business: "Cortez Cleaning Co.", email: "maria@cortezcleaning.co", phone: "(305) 555-0147", service: "Logo & Branding", budget: "$2,500 – $5,000", date: "Jun 12", time: "8:12 AM", status: "new", source: "Website contact form",
    message: "We're expanding from residential to commercial contracts and need to look the part. Want a full rebrand — logo, colors, the works. We have 6 vans that will need new wraps after." },
  { id: 3, name: "Tommy Nguyen", business: "TN Electric", email: "tommy@tnelectric.net", phone: "(512) 555-0139", service: "Vehicle Wrap", budget: "$1,000 – $2,500", date: "Jun 11", time: "4:55 PM", status: "replied", source: "Website contact form",
    message: "Just bought a new F-250 and want a wrap design that matches the branding you guys did for us last year. Same crew, same quality hopefully!" },
  { id: 4, name: "Curt Bradley", business: "Bradley & Sons HVAC", email: "curt@bradleyhvac.com", phone: "(817) 555-0116", service: "Brand Access Program", budget: "$150/mo plan", date: "Jun 11", time: "11:20 AM", status: "booked", source: "Concierge chat",
    message: "Talked with your chat thing about the access program. The math works for us — $150 a month beats dropping five grand before summer season. Ready to book a call." },
  { id: 5, name: "Jess Whitfield", business: "Whitfield Lawn Care", email: "jess@whitfieldlawn.com", phone: "(404) 555-0171", service: "Mascot Design", budget: "$2,500 – $5,000", date: "Jun 10", time: "2:08 PM", status: "replied", source: "Website contact form",
    message: "Love the mascot work on your site. We want a friendly grass-blade character we can put on trucks, door hangers, and yard signs. Something kids point at.", note: "Wants to see Capitan-style options. Send mascot portfolio." },
  { id: 6, name: "Andre Marsh", business: "Marsh Concrete", email: "andre@marshconcrete.com", phone: "(615) 555-0194", service: "Website", budget: "$5,000+", date: "Jun 9", time: "10:33 AM", status: "booked", source: "Referral — Bison Roofing",
    message: "Bison Roofing sent me your way. Need a full site with project galleries and quote requests. Our current site is a Facebook page, so the bar is low." },
  { id: 7, name: "Pat Donnelly", business: "Donnelly Plumbing", email: "pat@donnellyplumbing.com", phone: "(303) 555-0158", service: "Logo & Branding", budget: "$1,000 – $2,500", date: "Jun 8", time: "3:47 PM", status: "new", source: "Website contact form",
    message: "Third-generation plumbing company, still using my grandfather's hand-drawn logo. Want to modernize it without losing the history. Is that something you do?" },
  { id: 8, name: "Sandra Kim", business: "Bright Path Pest Control", email: "sandra@brightpathpest.com", phone: "(206) 555-0123", service: "Brand Access Program", budget: "$150/mo plan", date: "Jun 7", time: "9:02 AM", status: "replied", source: "Brand Access quote form",
    message: "Got my instant quote — looks good. One question before I activate: do the monthly payments cover the truck wrap design too, or is that separate?",
    thread: [
      { from: "customer", date: "Jun 7", time: "9:02 AM", text: "Got my instant quote — looks good. One question before I activate: do the monthly payments cover the truck wrap design too, or is that separate?" },
      { from: "team", date: "Jun 7", time: "10:40 AM", text: "Hi Sandra — good question. Your quote covers the full brand package. Wrap design can be added to the same plan; the monthly amount adjusts based on what's included, and you'll see the exact number before you confirm anything." },
    ] },
  { id: 9, name: "Mike Tran", business: "Tran's Handyman Services", email: "mike@transhandyman.com", phone: "(713) 555-0167", service: "Print & Collateral", budget: "Under $1,000", date: "Jun 6", time: "1:15 PM", status: "archived", source: "Website contact form",
    message: "Need business cards and door hangers designed. Maybe 2 designs each. What would that run me?" },
  { id: 10, name: "Lena Fischer", business: "Fischer Painting", email: "lena@fischerpainting.com", phone: "(480) 555-0109", service: "Vehicle Wrap", budget: "$2,500 – $5,000", date: "Jun 5", time: "5:28 PM", status: "archived", source: "Instagram",
    message: "Saw a wrap you posted on Instagram. We have 3 box trucks and 2 vans. Looking for quotes on wrap design for the whole fleet." },
];

export default function InquiriesPage() {
  return <InquiriesBrowser inquiries={INQUIRIES} />;
}
