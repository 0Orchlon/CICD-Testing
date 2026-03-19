import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="company-site">
      <nav className="navbar">
        <div className="container-wide">
          <div className="logo">DevOps Cloud Solutions Made by DevOp7</div>
          <ul className="nav-links">
            <li><a href="#home">Нүүр</a></li>
            <li><a href="#about-cicd">CI/CD Тухай</a></li>
            <li><a href="#services">Үйлчилгээ</a></li>
            <li><button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button></li>
          </ul>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="container">
          <h1>Програм хангамжийн автоматжуулалтын ирээдүй</h1>
          <p className="hero-subtitle">Бид таны бизнесийн хөгжүүлэлтийн процессыг CI/CD-ээр хурдасгана.</p>
          <a href="#about-cicd" className="btn-primary">Дэлгэрэнгүй үзэх</a>
        </div>
      </header>

      <section id="about-cicd" className="cicd-detail-section">
        <div className="container-wide">
          <h2 className="section-title">CI/CD гэж юу вэ?</h2>
          <p className="section-intro">
            CI/CD нь програм хангамж хөгжүүлэлтийн орчин үеийн арга барил бөгөөд автоматжуулалтын тусламжтайгаар
            код бичихээс эхлээд хэрэглэгчдэд хүрэх хүртэлх бүх шатыг хялбарчилдаг.
          </p>

          <div className="cicd-grid">
            <div className="cicd-item">
              <div className="cicd-image">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="Continuous Integration" />
              </div>
              <div className="cicd-text">
                <h3>1. Continuous Integration (CI) - Тасралтгүй Нэгтгэл</h3>
                <p>
                  Хөгжүүлэгчид өдөр бүр хийсэн өөрчлөлтөө үндсэн код руу нэгтгэх процесс юм.
                  Энэ үед автомат тестүүд ажиллаж, шинэ код нь хуучин кодтой зөрчилдөж байгаа эсэхийг шалгадаг.
                </p>
                <ul>
                  <li>Код шалгах (Code Linting)</li>
                  <li>Автомат тест (Unit Testing)</li>
                  <li>Автомат угсралт (Build Automation)</li>
                </ul>
              </div>
            </div>

            <div className="cicd-item reverse">
              <div className="cicd-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Continuous Deployment" />
              </div>
              <div className="cicd-text">
                <h3>2. Continuous Delivery & Deployment (CD) - Тасралтгүй Хүргэлт</h3>
                <p>
                  CI шатны дараа програм хангамжийг автоматаар бэлэн болгож, туршилтын эсвэл бодит орчинд
                  байршуулах процесс юм. Энэ нь алдаа гарах эрсдэлийг бууруулж, шинэ боломжуудыг хэрэглэгчдэд хурдан хүргэдэг.
                </p>
                <ul>
                  <li>Автомат байршуулалт (Auto Deployment)</li>
                  <li>Орчны тохиргоо (Infrastructure as Code)</li>
                  <li>Хяналт ба мониторинг (Monitoring)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h3>CI/CD-ийн давуу талууд:</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="icon">🚀</div>
                <h4>Хурд</h4>
                <p>Шинэ боломжуудыг хэдхэн минутын дотор байршуулна.</p>
              </div>
              <div className="benefit-card">
                <div className="icon">🛡️</div>
                <h4>Найдвартай байдал</h4>
                <p>Автомат тестүүд нь алдааг эрт илрүүлнэ.</p>
              </div>
              <div className="benefit-card">
                <div className="icon">📉</div>
                <h4>Зардал багасгах</h4>
                <p>Гар ажиллагааг халж, цаг хугацаа хэмнэнэ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container-wide">
          <h2 className="section-title">Манай Үйлчилгээ</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Cloud Migration</h3>
              <p>Таны системийг AWS, Azure эсвэл Google Cloud руу шилжүүлнэ.</p>
            </div>
            <div className="service-card">
              <h3>Kubernetes Management</h3>
              <p>Контейнер суурьтай системүүдийн автоматжуулалт ба удирдлага.</p>
            </div>
            <div className="service-card">
              <h3>Security Audits</h3>
              <p>DevSecOps арга барилаар системийн аюулгүй байдлыг хангах.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="container-wide">
          <div className="footer-content">
            <div className="footer-info">
              <h3>DevOps Cloud Solutions</h3>
              <p>Улаанбаатар хот, Монгол улс</p>
              <p>Имэйл: info@devops.mn</p>
            </div>
            <div className="footer-links">
              <h4>Холбоосууд</h4>
              <ul>
                <li><a href="#home">Нүүр</a></li>
                <li><a href="#about-cicd">CI/CD</a></li>
                <li><a href="#services">Үйлчилгээ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 DevOps Cloud Solutions. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
