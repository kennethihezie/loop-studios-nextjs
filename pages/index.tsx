import CreationSection from '@/components/creation_section/creation_section'
import Footer from '@/components/footer/footer'
import FeatureSection from 'components/feature_section/feature_section'
import Hero from 'components/hero/hero'
import Head from 'next/head'
import { Component, ReactNode } from 'react'

interface IState {
  isOpen: boolean
}

interface IProps {

}

export default class LoopStudios extends Component<IProps, IState>{
  constructor(props: IProps){
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen})
    return true
  }

  render(): ReactNode {
      return (
        <>
        <Head>
          <title>LoopStudios</title>
          <meta name="description" content="Created by Collins  Ihezie" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
         click={this.toggleMenu}
         isOpen={this.state.isOpen}
        />
        <FeatureSection />
        
        <CreationSection />

        <Footer />
        </>
      )
  }
}
