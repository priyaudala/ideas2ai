import React from 'react'
import DeepLearning from '../../components/Services/DataScience/DeepLearning'
import ArtificialIntelligence from '../../components/Services/DataScience/ArtificialIntelligence'
import MachineLearning from '../../components/Services/DataScience/MachineLearning'
import AiChatbots from '../../components/Services/DataScience/AiChatbots'
import Technologies from '../../components/Services/DataScience/Technologies'
import Competencies from '../../components/Services/DataScience/Competencies'

const DataSciencePage = () => {
  return (
    <div>
      <DeepLearning />
      <ArtificialIntelligence />
      <MachineLearning />
      <AiChatbots />
      <Technologies />
      <Competencies />
    </div>
  )
}

export default DataSciencePage
