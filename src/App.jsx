import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Gem,
  Gift,
  GlassWater,
  Heart,
  MapPin,
  Menu,
  Sparkles,
  Ticket,
  X,
} from 'lucide-react'
import './App.css'

const inclusions = [
  {
    title: 'Lip gloss making',
    detail: 'Mix your own glossy, feel-good shade and take your custom creation home.',
    icon: GlassWater,
    number: '01',
  },
  {
    title: 'Bedazzling',
    detail: 'Add a little extra to your favourite things with gems, colour and sparkle.',
    icon: Gem,
    number: '02',
  },
  {
    title: 'A free drink',
    detail: 'Something lovely to sip while you make, mix and catch up.',
    icon: Heart,
    number: '03',
  },
  {
    title: 'Free gifts',
    detail: 'A few thoughtful little treats, just for showing up.',
    icon: Gift,
    number: '04',
  },
  {
    title: 'Giveaways',
    detail: 'There will be extra goodies up for grabs during the afternoon.',
    icon: Sparkles,
    number: '05',
  },
]

const tickets = {
  solo: { name: 'Solo ticket', price: 400 },
  besties: { name: 'Besties ticket', price: 500 },
}

const currentExperience = {
  edition: '01',
  title: 'Lipgloss Making Workshop × Bedazzling',
  date: 'Thursday, 1 October',
  time: '5:00 PM — 9:00 PM',
  venue: 'Nineteen Cafe',
  area: '10th of Ramadan City',
  start: '20261001T170000',
  end: '20261001T210000',
  whatsapp: '201093570201',
}

function GlossArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Chroma gloss tube surrounded by sparkling rhinestones">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-copy">A LITTLE<br /><em>GLOSS</em><br />A LOT OF<br />SPARKLE</div>
      <div className="gloss-product" aria-hidden="true">
        <div className="gloss-cap"><span /></div>
        <div className="gloss-stem" />
        <div className="gloss-tube">
          <span className="tube-shine" />
          <span className="tube-label">CHROMA<br /><small>GLOSS BAR</small></span>
          <span className="tube-gloss" />
        </div>
        <div className="gloss-base" />
      </div>
      <span className="rhinestone stone-one"><Gem size={33} /></span>
      <span className="rhinestone stone-two"><Gem size={23} /></span>
      <span className="rhinestone stone-three"><Gem size={28} /></span>
      <span className="rhinestone stone-four"><Gem size={18} /></span>
      <span className="art-sparkle art-sparkle-one"><Sparkles size={31} /></span>
      <span className="art-sparkle art-sparkle-two"><Sparkles size={21} /></span>
      <div className="art-sticker"><span>MADE</span><b>by you</b><Heart size={15} fill="currentColor" /></div>
      <div className="art-caption"><span>CHROMA EXPERIENCES</span><span>EDITION {currentExperience.edition}</span></div>
    </div>
  )
}

function App() {
  const [activeInclusion, setActiveInclusion] = useState(0)
  const [selectedTicket, setSelectedTicket] = useState('besties')
  const [menuOpen, setMenuOpen] = useState(false)

  const ticket = tickets[selectedTicket]
  const bookingMessage = encodeURIComponent(
    `Hi Chroma! I'd love to book the ${ticket.name} for ${currentExperience.title} on 1 October.`,
  )
  const bookingUrl = `https://wa.me/${currentExperience.whatsapp}?text=${bookingMessage}`

  function downloadCalendarInvite() {
    const invite = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Chroma x Dearly//Workshop//EN',
      'BEGIN:VEVENT',
      'UID:chroma-dearly-workshop-20261001@chroma-eg.com',
      'DTSTAMP:20260929T120000Z',
      `DTSTART;TZID=Africa/Cairo:${currentExperience.start}`,
      `DTEND;TZID=Africa/Cairo:${currentExperience.end}`,
      `SUMMARY:${currentExperience.title}`,
      `LOCATION:${currentExperience.venue}, ${currentExperience.area}`,
      'DESCRIPTION:A new Chroma experience, every time. A little gloss, a little sparkle, and lovely company.',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
    const file = new Blob([invite], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'chroma-dearly-workshop.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main>
      <div className="announcement">
        <Sparkles size={13} aria-hidden="true" />
        <span>Creative experiences, by Chroma</span>
        <Sparkles size={13} aria-hidden="true" />
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Chroma home" onClick={closeMenu}>
          chroma<span className="wordmark-period">.</span>
          <span className="wordmark-caption">BEAUTY, WITH A TWIST</span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#chroma-way" onClick={closeMenu}>How Chroma works</a>
          <a href="#current-edition" onClick={closeMenu}>This edition</a>
          <a href="#tickets" onClick={closeMenu}>Tickets</a>
          <a href="#details" onClick={closeMenu}>The details</a>
          <a className="nav-book" href="#tickets" onClick={closeMenu}>
            Find your spot <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span /> CHROMA EXPERIENCES <span /></div>
          <h1>A new <em>idea.</em><br /><span>Every time.</span></h1>
          <p className="hero-note">Creative pop-ups, little rituals, and lovely things to make.<br className="desktop-break" /> No two Chroma experiences are quite alike.</p>
          <div className="edition-label"><span>NOW BOOKING</span><i /><span>EDITION {currentExperience.edition}</span></div>
          <div className="hero-date-row">
            <div className="hero-date-icon"><CalendarDays size={18} strokeWidth={1.5} /></div>
            <div><strong>{currentExperience.date}</strong><span>{currentExperience.time}</span></div>
            <i aria-hidden="true" />
            <div><strong>{currentExperience.venue}</strong><span>{currentExperience.area}</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#tickets">Book this experience <ArrowRight size={16} /></a>
            <button className="calendar-link" type="button" onClick={downloadCalendarInvite}>
              <CalendarDays size={16} /> Add to calendar
            </button>
          </div>
          <a className="scroll-cue" href="#experience"><span>SCROLL TO THE GOOD STUFF</span><ArrowDown size={14} /></a>
        </div>

        <GlossArtwork />
        <div className="hero-bottom-note"><span>ONE GOOD IDEA, A BRAND NEW WAY TO PLAY</span><span>THE CHROMA WAY</span></div>
      </section>

      <section className="chroma-way section-pad" id="chroma-way">
        <div className="chroma-way-heading">
          <p className="eyebrow eyebrow-dark">A LITTLE DIFFERENT, EVERY TIME</p>
          <h2>One good idea.<br /><em>A whole new experience.</em></h2>
        </div>
        <div className="chroma-way-points">
          <article><span>01</span><h3>Make</h3><p>Hands-on things you never knew you wanted to try.</p></article>
          <article><span>02</span><h3>Make it yours</h3><p>Your own colours, your own details, your own little creation.</p></article>
          <article><span>03</span><h3>Make a day of it</h3><p>Good company, thoughtful extras, and room to just enjoy.</p></article>
        </div>
        <div className="edition-rhythm"><Sparkles size={16} /><span>THE NEXT EDITION IS ALWAYS SOMETHING NEW</span><Sparkles size={16} /></div>
      </section>

      <section className="experience section-pad" id="current-edition">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">EDITION {currentExperience.edition} · THIS TIME AROUND</p>
          <h2>Lipgloss, gems<br />and <em>good company.</em></h2>
          <p className="section-intro">A peek inside {currentExperience.title}. The details change with every edition; the Chroma feeling stays.</p>
        </div>
        <div className="inclusion-layout">
          <div className="inclusion-list" role="tablist" aria-label="What's included">
            {inclusions.map((item, index) => {
              const Icon = item.icon
              const isActive = activeInclusion === index
              return (
                <button
                  className={`inclusion-item${isActive ? ' active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="inclusion-detail"
                  key={item.title}
                  onClick={() => setActiveInclusion(index)}
                >
                  <span className="inclusion-number">{item.number}</span>
                  <Icon size={21} strokeWidth={1.45} />
                  <span className="inclusion-title">{item.title}</span>
                  {isActive ? <ArrowRight className="inclusion-arrow" size={17} /> : <ChevronDown className="inclusion-arrow" size={16} />}
                </button>
              )
            })}
          </div>
          <div className="inclusion-detail" id="inclusion-detail" role="tabpanel">
            <span className="detail-kicker">A LITTLE OF THIS, A LITTLE OF THAT</span>
            <span className="detail-number">{inclusions[activeInclusion].number}</span>
            <div className="detail-doodle" aria-hidden="true"><Sparkles size={30} /><Heart size={17} /></div>
            <h3>{inclusions[activeInclusion].title}<span>.</span></h3>
            <p>{inclusions[activeInclusion].detail}</p>
            <div className="detail-rule"><span>MADE WITH LOVE</span><span>✳</span><span>TAKEN HOME BY YOU</span></div>
          </div>
        </div>
      </section>

      <section className="ticket-section section-pad" id="tickets">
        <div className="ticket-visual" aria-label="Chroma lip gloss and sparkling gems illustration" role="img">
          <div className="ticket-visual-copy"><span>THIS EDITION</span><strong>MAKE<br /><em>it</em> SHINE</strong><small>LIPGLOSS × BEDAZZLING</small></div>
          <div className="ticket-gloss" aria-hidden="true"><span /><i /></div>
          <Gem className="ticket-gem ticket-gem-one" size={53} strokeWidth={1} />
          <Gem className="ticket-gem ticket-gem-two" size={28} strokeWidth={1} />
          <Sparkles className="ticket-sparkle ticket-sparkle-one" size={29} />
          <Sparkles className="ticket-sparkle ticket-sparkle-two" size={20} />
          <div className="ticket-visual-frame" />
        </div>
        <div className="ticket-panel">
          <p className="eyebrow eyebrow-dark">YOUR AFTERNOON, YOUR CALL</p>
          <h2>Pick your<br /><em>kind of fun.</em></h2>
          <div className="ticket-options" role="radiogroup" aria-label="Choose a ticket">
            <button className={`ticket-option${selectedTicket === 'solo' ? ' selected' : ''}`} type="button" role="radio" aria-checked={selectedTicket === 'solo'} onClick={() => setSelectedTicket('solo')}>
              <span className="ticket-check">{selectedTicket === 'solo' && <Check size={13} />}</span>
              <span className="ticket-copy"><strong>Solo</strong><small>One lovely spot</small></span>
              <span className="ticket-price">400 <small>EGP</small></span>
            </button>
            <button className={`ticket-option${selectedTicket === 'besties' ? ' selected' : ''}`} type="button" role="radio" aria-checked={selectedTicket === 'besties'} onClick={() => setSelectedTicket('besties')}>
              <span className="ticket-check">{selectedTicket === 'besties' && <Check size={13} />}</span>
              <span className="ticket-copy"><strong>Besties <span className="besties-tag">A LITTLE LESS EACH</span></strong><small>Two spots to share</small></span>
              <span className="ticket-price">500 <small>EGP</small></span>
            </button>
          </div>
          <a className="button button-dark ticket-book" href={bookingUrl} target="_blank" rel="noreferrer">
            Book {selectedTicket === 'besties' ? 'two spots' : 'your spot'} on WhatsApp <ArrowRight size={16} />
          </a>
          <p className="ticket-footnote"><Ticket size={14} /> Limited spots, lots of sparkle.</p>
        </div>
      </section>

      <section className="details-section section-pad" id="details">
        <div className="details-heading">
          <p className="eyebrow eyebrow-dark">PUT IT IN YOUR PLANS</p>
          <h2>Meet us <em>there.</em></h2>
        </div>
        <div className="details-grid">
          <div className="detail-cell">
            <span className="detail-icon"><CalendarDays size={19} /></span>
            <span className="detail-label">THE WHEN</span>
            <strong>{currentExperience.date}</strong>
            <span>{currentExperience.time}</span>
            <button className="text-action" type="button" onClick={downloadCalendarInvite}>Add to calendar <ArrowUpRight size={13} /></button>
          </div>
          <div className="detail-cell">
            <span className="detail-icon"><MapPin size={19} /></span>
            <span className="detail-label">THE WHERE</span>
            <strong>{currentExperience.venue}</strong>
            <span>{currentExperience.area}, Egypt</span>
            <a className="text-action" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${currentExperience.venue} ${currentExperience.area}`)}`} target="_blank" rel="noreferrer">Open in maps <ArrowUpRight size={13} /></a>
          </div>
          <div className="detail-cell">
            <span className="detail-icon"><Clock3 size={19} /></span>
            <span className="detail-label">THE PLAN</span>
            <strong>Four unhurried hours</strong>
            <span>Come as you are. Leave a little glossier.</span>
            <a className="text-action" href={bookingUrl} target="_blank" rel="noreferrer">Ask us anything <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </section>

      <section className="memories-section section-pad" id="memories">
        <div className="memories-topline"><p className="eyebrow">THE CHROMA ARCHIVE</p><span>AFTER EVERY EDITION</span></div>
        <div className="memories-content">
          <div className="memory-note"><Camera size={23} strokeWidth={1.4} /><span>EDITION {currentExperience.edition}</span></div>
          <h2>Every edition.<br /><em>A little more to love.</em></h2>
          <p>The Chroma archive grows with every new experience: the making, the sparkle, and the people who came along.</p>
          <span className="memories-coming"><span /> FIRST MEMORIES, COMING SOON</span>
        </div>
        <div className="memory-frames" aria-label="A place for workshop photos, coming after the event">
          <div className="memory-frame frame-tall"><Camera size={25} /><span>THE MAKING</span><small>YOUR PHOTO HERE</small></div>
          <div className="memory-frame frame-short"><Sparkles size={23} /><span>THE SPARKLE</span><small>YOUR PHOTO HERE</small></div>
          <div className="memory-frame frame-square"><Heart size={22} /><span>THE PEOPLE</span><small>YOUR PHOTO HERE</small></div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-flower" aria-hidden="true">✳</div>
        <div className="social-copy">
          <span className="eyebrow eyebrow-dark">FOLLOW ALONG FOR THE NEXT ONE</span>
          <h2>What's next? <em>Chroma knows.</em></h2>
          <p>New experiences, dates, and little previews live over on Instagram.</p>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/chroma_egy/" target="_blank" rel="noreferrer"><Camera size={18} /><span><small>FIND US ON INSTAGRAM</small>@chroma_egy</span><ArrowUpRight size={16} /></a>
          <a href="https://www.instagram.com/dearly_digitalstudio/" target="_blank" rel="noreferrer"><Camera size={18} /><span><small>MADE WITH</small>@dearly_digitalstudio</span><ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">chroma<span className="wordmark-period">.</span></a>
        <span>NEW EXPERIENCES, EVERY EDITION</span>
        <a className="dearly-credit" href="https://www.instagram.com/dearly_digitalstudio/" target="_blank" rel="noreferrer">Digital Experience by Dearly <ArrowUpRight size={12} /></a>
      </footer>

      <div className="mobile-book-bar">
        <span><strong>{ticket.price} <small>EGP</small></strong><small>{ticket.name}</small></span>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Book your spot <ArrowRight size={15} /></a>
      </div>
    </main>
  )
}

export default App
