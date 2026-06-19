import React from 'react'
import MobileApplicationTesting from '../../components/Services/SoftwareTesting/MobileApplicationTesting'
import Manual from '../../components/Services/SoftwareTesting/Manual'
import Automation from '../../components/Services/SoftwareTesting/Automation'

const SoftwareTestingPage = () => {
  return (
    <div>
      <MobileApplicationTesting />
      <Manual />
      <Automation />
    </div>
  )
}

export default SoftwareTestingPage
