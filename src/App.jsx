import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Modules from './pages/Modules'
import Schedule from './pages/Schedule'
import Capstone from './pages/Capstone'
import Resources from './pages/Resources'
import QuestionBank from './pages/QuestionBank'
import Instructor from './pages/Instructor'
import Governance from './pages/Governance'
import Appendix from './pages/Appendix'
import LeadCapture from './pages/LeadCapture'
import InfoSession from './pages/InfoSession'
import TransformingFinance from './pages/TransformingFinance'
import FlyerDownload from './pages/FlyerDownload'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/capstone" element={<Capstone />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/appendix" element={<Appendix />} />
        <Route path="/get-playbook" element={<LeadCapture />} />
        <Route path="/info-session" element={<InfoSession />} />
        <Route path="/transforming-finance" element={<TransformingFinance />} />
        <Route path="/get-flyer" element={<FlyerDownload />} />
      </Routes>
    </Layout>
  )
}
