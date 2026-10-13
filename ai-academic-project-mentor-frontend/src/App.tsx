import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowRight, ArrowUpRight,
  BrainCircuit, Check, ChevronDown, CircleHelp, ClipboardCheck, Clock3,
  Code2, Compass, FileText, FlaskConical, GraduationCap, Layers3, Lightbulb,
  Menu, MessageCircle, Network, Orbit, Rocket, ShieldAlert, Sparkles,
  Target, X, Zap,
} from 'lucide-react'

type View = 'home' | 'onboarding' | 'create'
const modules = [
  { icon: BrainCircuit, title: 'Feasibility analysis', text: 'Understand what is realistic before you commit weeks of work.', tag: '01' },
  { icon: Layers3, title: 'The right tech stack', text: 'Choose technologies that match your goals, skills and constraints.', tag: '02' },
  { icon: Clock3, title: 'Milestones that make sense', text: 'Turn a big goal into a clear week-by-week execution plan.', tag: '03' },
  { icon: ShieldAlert, title: 'Risks, spotted early', text: 'Identify blockers and plan practical ways around them.', tag: '04' },
  { icon: MessageCircle, title: 'A mentor on demand', text: 'Get help, share progress and work through the next challenge.', tag: '05' },
  { icon: FileText, title: 'Documentation, faster', text: 'Create a useful starting point for synopsis and progress reports.', tag: '06' },
]

function Brand() {
  return <a href="#top" className="brand" aria-label="ProjectMentor AI home"><span className="brand-mark"><Orbit size={20} /></span><span>projectmentor<span className="brand-ai">.ai</span></span></a>
}

function App() {
  const [view, setView] = useState<View>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [idea, setIdea] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [skills, setSkills] = useState<string[]>(['Python'])
  const [notice, setNotice] = useState('')

  const startProject = () => { setSubmitted(false); setNotice(''); setView('create'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const toggleSkill = (skill: string) => setSkills(current => current.includes(skill) ? current.filter(s => s !== skill) : [...current, skill])

  return (
    <div className="app-shell" id="top">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="navbar">
        <div className="nav-inner">
          <Brand />
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#students" onClick={() => setMenuOpen(false)}>For students</a>
            <button className="nav-mobile-cta" onClick={() => { setView('onboarding'); setMenuOpen(false) }}>Get started <ArrowRight size={16} /></button>
          </nav>
          <div className="nav-actions">
            <button className="nav-text-button" onClick={() => setView('onboarding')}>Sign in</button>
            <button className="button button-small button-light" onClick={() => setView('onboarding')}>Get started <ArrowUpRight size={15} /></button>
          </div>
          <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
            <section className="hero section-wrap">
              <div className="hero-copy">
                <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><span className="live-dot" /> YOUR AI-POWERED PROJECT COMPANION</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>Big ideas deserve<br />a <span className="gradient-text">better beginning.</span></motion.h1>
                <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>Turn your rough academic project idea into a plan you can actually build—with clear milestones, thoughtful technology choices and an AI mentor by your side.</motion.p>
                <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32 }}>
                  <button className="button button-primary" onClick={startProject}>Build my project <ArrowRight size={17} /></button>
                  <a className="button button-ghost" href="#how-it-works"><span className="play-icon">↘</span> See how it works</a>
                </motion.div>
                <div className="hero-proof"><div className="avatar-stack"><span>A</span><span>M</span><span>R</span><span>+</span></div><p><strong>Made for curious builders.</strong><br /><span>From first idea to final submission.</span></p></div>
              </div>
              <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>
                <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
                <div className="visual-topline"><span><span className="status-dot" /> PROJECT BLUEPRINT</span><span className="tiny-pill"><Sparkles size={12} /> AI assisted</span></div>
                <div className="visual-project-head"><div className="project-icon"><BrainCircuit size={22} /></div><div><span className="muted-label">YOUR NEXT BIG IDEA</span><h3>Smart Campus Companion</h3><p>AI · Web app · Student productivity</p></div></div>
                <div className="blueprint-score"><div><span className="muted-label">FEASIBILITY SCORE</span><div className="score-line"><strong>86</strong><span>/100</span><span className="score-change"><ArrowUpRight size={13} /> Strong</span></div></div><div className="score-ring"><span>86<small>%</small></span></div></div>
                <div className="visual-divider" />
                <div className="mini-section-heading"><span>YOUR ROADMAP</span><span>8 WEEKS</span></div>
                <div className="roadmap">
                  <div className="roadmap-line" />
                  <div className="roadmap-item done"><span className="roadmap-node"><Check size={12} /></span><div><strong>Define the problem</strong><small>Scope & objectives</small></div><span className="roadmap-state">READY</span></div>
                  <div className="roadmap-item active"><span className="roadmap-node"><Code2 size={12} /></span><div><strong>Build the foundation</strong><small>Architecture & setup</small></div><span className="roadmap-state">WEEK 01</span></div>
                  <div className="roadmap-item"><span className="roadmap-node"><FlaskConical size={12} /></span><div><strong>Prototype & validate</strong><small>Core features</small></div><span className="roadmap-state">UP NEXT</span></div>
                </div>
                <div className="visual-footer"><span><Sparkles size={13} /> Your plan adapts as you progress</span><ArrowUpRight size={15} /></div>
                <div className="floating-chip chip-top"><span className="chip-icon"><Target size={15} /></span><span><strong>Clear direction</strong><small>Less guesswork</small></span></div>
                <div className="floating-chip chip-bottom"><span className="chip-icon green"><Zap size={15} /></span><span><strong>Risk detected</strong><small>Plan a fallback early</small></span></div>
              </motion.div>
              <div className="hero-bottom-note"><span>PLAN WITH PURPOSE</span><span className="note-rule" /><span>BUILD WITH CONFIDENCE</span><span className="note-rule" /><span>LEARN AS YOU GO</span></div>
            </section>

            <section className="trust-strip"><div className="section-wrap trust-inner"><span>ONE WORKSPACE FOR YOUR ENTIRE PROJECT JOURNEY</span><div><span><Compass size={16} /> Clarity</span><span><Network size={16} /> Structure</span><span><GraduationCap size={16} /> Mentorship</span><span><Rocket size={16} /> Momentum</span></div></div></section>

            <section className="section-wrap workflow-section" id="how-it-works">
              <div className="section-heading"><div className="eyebrow"><span className="eyebrow-dash" /> A CLEARER WAY FORWARD</div><h2>From “what if?” to<br /><span className="gradient-text">“what's next?”</span></h2><p>A good project doesn't start with more tabs open. It starts with a plan that makes sense for you.</p></div>
              <div className="workflow-grid">
                {[
                  {n:'01',icon:Lightbulb,title:'Share the spark',desc:'Describe your idea in a few lines. No perfect brief needed.'},
                  {n:'02',icon:BrainCircuit,title:'Get a blueprint',desc:'Explore feasibility, scope, tools, milestones and possible risks.'},
                  {n:'03',icon:Rocket,title:'Make real progress',desc:'Check in with your mentor, track progress and adapt your plan.'},
                ].map((item, i) => <motion.article className="workflow-card" key={item.n} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{delay:i*.1}}><div className="workflow-card-top"><span>{item.n} / 03</span><item.icon size={21}/></div><h3>{item.title}</h3><p>{item.desc}</p><div className="workflow-card-line" /></motion.article>)}
              </div>
            </section>

            <section className="features-section" id="features"><div className="section-wrap">
              <div className="features-head"><div className="section-heading left"><div className="eyebrow"><span className="eyebrow-dash" /> YOUR PROJECT TOOLKIT</div><h2>Less overwhelm.<br /><span className="gradient-text">More making.</span></h2></div><p>Practical guidance for the moments that usually slow student teams down.</p></div>
              <div className="feature-grid">{modules.map((item,i)=><motion.article className="feature-card" key={item.tag} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:(i%3)*.08}}><div className="feature-top"><span className="feature-icon"><item.icon size={20}/></span><span className="feature-number">{item.tag}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="feature-arrow"><ArrowUpRight size={16}/></div></motion.article>)}</div>
            </div></section>

            <section className="section-wrap students-section" id="students"><div className="student-panel"><div className="student-copy"><div className="eyebrow"><span className="eyebrow-dash" /> BUILT AROUND YOUR JOURNEY</div><h2>Your project.<br /><span className="gradient-text">Your pace.</span></h2><p>Whether you're choosing a topic, building your first prototype or preparing your report, keep your next step visible and your goals realistic.</p><button className="button button-primary" onClick={()=>setView('onboarding')}>Set up your profile <ArrowRight size={16}/></button><div className="student-footnote"><ShieldAlert size={15}/> Designed to support your work—not replace your learning.</div></div><div className="student-stats"><div className="stat-card stat-large"><div className="stat-card-label"><span className="status-dot"/> PROJECT HEALTH <span>DEMO</span></div><div className="health-row"><strong>On track</strong><span>+12%</span></div><div className="health-bars">{[35,52,43,68,58,76,64,90,72,84,77,100].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div><div className="stat-card-bottom"><span>Progress snapshot</span><span>Updated just now</span></div></div><div className="stat-card stat-small"><span className="stat-small-icon"><ClipboardCheck size={17}/></span><div><strong>4 milestones</strong><small>Ready to plan</small></div><ArrowUpRight size={15}/></div><div className="stat-card stat-small"><span className="stat-small-icon purple"><MessageCircle size={17}/></span><div><strong>Ask your mentor</strong><small>Get unstuck, one step at a time</small></div><ArrowUpRight size={15}/></div></div></div></section>

            <section className="section-wrap final-cta"><div className="cta-glow"/><div className="eyebrow"><span className="live-dot"/> YOUR NEXT CHAPTER STARTS HERE</div><h2>You've got the idea.<br /><span className="gradient-text">Let's make it real.</span></h2><p>Start with a thought. Leave with a direction.</p><button className="button button-primary" onClick={startProject}>Build my project <ArrowRight size={17}/></button><span className="cta-caption"><Sparkles size={13}/> Your first step can be small.</span></section>
            <footer className="footer"><div className="section-wrap footer-inner"><Brand/><span>Built for student teams with big ideas.</span><div><a href="#how-it-works">How it works</a><a href="#features">Capabilities</a><button onClick={()=>setView('onboarding')}>Get started</button></div><small>© 2026 ProjectMentor AI · Academic project demo</small></div></footer>
          </motion.main>
        )}
        {view === 'onboarding' && (
          <motion.main className="form-page section-wrap" key="onboarding" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
            <button className="back-link" onClick={()=>setView('home')}>← Back to home</button>
            <div className="form-shell"><div className="form-intro"><span className="form-icon"><GraduationCap size={23}/></span><div className="eyebrow">STUDENT ONBOARDING · MILESTONE 1</div><h1>Let's get to know<br/><span className="gradient-text">the builder.</span></h1><p>A little context helps us shape project guidance around your current skills and goals.</p><div className="form-step"><span className="step-active">01</span><span/><span>02</span><small>YOUR PROFILE</small></div></div>
            <form className="form-card" onSubmit={e=>{e.preventDefault();setNotice('Profile saved in this demo session. API integration will be added when the team shares the Swagger/OpenAPI contract.')}}><label>What should we call you?<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required/></label><label>Course / branch<input placeholder="e.g. B.Tech · AI & Data Science" /></label><label>Current year<select defaultValue=""><option value="" disabled>Select your year</option><option>1st year</option><option>2nd year</option><option>3rd year</option><option>4th year</option><option>Postgraduate</option></select></label><div className="field-label">Which skills have you used?</div><p className="field-hint">Choose all that apply. You can update this later.</p><div className="skill-options">{['Python','Java','C / C++','JavaScript','React','SQL','Machine Learning','UI / UX'].map(skill=><button type="button" key={skill} className={skills.includes(skill)?'skill-option selected':'skill-option'} onClick={()=>toggleSkill(skill)}>{skills.includes(skill)&&<Check size={13}/>} {skill}</button>)}</div><button className="button button-primary form-submit" type="submit">Save profile <ArrowRight size={16}/></button>{notice&&<div className="notice"><Check size={15}/>{notice}</div>}</form></div>
          </motion.main>
        )}
        {view === 'create' && (
          <motion.main className="form-page section-wrap" key="create" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
            <button className="back-link" onClick={()=>setView('home')}>← Back to home</button>
            <div className="form-shell create-shell"><div className="form-intro"><span className="form-icon"><Lightbulb size={23}/></span><div className="eyebrow">PROJECT IDEA · MILESTONE 1</div><h1>Every great project<br />starts with <span className="gradient-text">a spark.</span></h1><p>Share your rough idea. It doesn't need to be perfect—we'll use it as the starting point for your project blueprint.</p><div className="idea-note"><Sparkles size={16}/><span><strong>Keep it simple.</strong><br/>Two or three sentences are enough to get started.</span></div></div>
            <form className="form-card" onSubmit={e=>{e.preventDefault();setSubmitted(true);setNotice('')}}><label>Give your idea a working title<input placeholder="e.g. Smart Campus Companion" required/></label><label>Describe your idea<textarea value={idea} onChange={e=>setIdea(e.target.value)} placeholder="What problem do you want to solve? Who would use your solution? What do you imagine it doing?" rows={6} maxLength={1000} required/></label><div className="textarea-footer"><span>{idea.length}/1000 characters</span><span>Rough ideas welcome</span></div><div className="demo-note"><CircleHelp size={16}/><p><strong>Demo mode:</strong> This form currently validates your input locally. We'll connect it to the real project-creation API after the backend team shares Swagger/OpenAPI documentation.</p></div><button className="button button-primary form-submit" type="submit" disabled={idea.trim().length<10}>Continue with this idea <ArrowRight size={16}/></button>{submitted&&<div className="notice"><Check size={15}/><span>Idea captured in this demo session. Next step: connect the project creation endpoint and AI pipeline.</span></div>}</form></div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App