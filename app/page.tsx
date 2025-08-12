// app/page.tsx
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import ArtistSection from '@/components/ArtistSection'
import DesignerSection from '@/components/DesignerSection'
import StorytellerSection from '@/components/StorytellerSection'
import AboutSection from '@/components/AboutSection'
import ConnectSection from '@/components/ConnectSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <ArtistSection />
      <DesignerSection />
      <StorytellerSection />
      <AboutSection />
      <ConnectSection />
    </main>
  )
}