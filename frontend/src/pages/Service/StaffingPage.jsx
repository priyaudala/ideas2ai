import React from 'react'
import StaffAugmentation from '../../components/Services/Staffing/StaffAugmentation'
import PermanentStaffingServices from '../../components/Services/Staffing/PermanentStaffingServices'
import ContractStaffingServices from '../../components/Services/Staffing/ContractStaffingServices'
import ContractToHire from '../../components/Services/Staffing/ContractToHire'

const StaffingPage = () => {
  return (
    <div>
      <StaffAugmentation />
      <PermanentStaffingServices />
      <ContractStaffingServices />
      <ContractToHire />
    </div>
  )
}

export default StaffingPage
