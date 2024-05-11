import React from 'react';
import { motion } from 'framer-motion';
import Cardiology from '../assets/departmentIcons/cardiology.png'
import Neurology from '../assets/departmentIcons/neurology.png'
import Orthopedics from '../assets/departmentIcons/orthopedics.png'
import Pediatrics from '../assets/departmentIcons/orthopedics.png'
import Maternity from '../assets/departmentIcons/maternity.png'
import Anesthesia from '../assets/departmentIcons/anesthesia.png'
import Ayurveda from '../assets/departmentIcons/ayurveda.png'
import Laboratory from '../assets/departmentIcons/Laboratory.png'
import BloodBank from '../assets/departmentIcons/BloodBank.png'
import CriticalCare from '../assets/departmentIcons/CriticalCare.png'
import DentalClinical from '../assets/departmentIcons/DentalClinical.png'
import EarAche from '../assets/departmentIcons/EarAche.png'
import EmergencyMedicine from '../assets/departmentIcons/EmergencyMedicine.png'
import Endocrinology from '../assets/departmentIcons/Endocrinology.png'
import Gastroenterology from '../assets/departmentIcons/gastroenterology.png'
import GeneralMedicine from '../assets/departmentIcons/GeneralMedicine.png'
import Surgery from '../assets/departmentIcons/Surgery.png'
import Homeopathy from '../assets/departmentIcons/Homeopathy.png'
import Radiology from '../assets/departmentIcons/Radiology.png'
import Naturopathy from '../assets/departmentIcons/Naturopathy.png'
import Nephrology from '../assets/departmentIcons/Nephrology.png'
import Nutrition from '../assets/departmentIcons/Nutrition.png'
import Gynecology from '../assets/departmentIcons/Gynecology.png'
import Ophthalmology from '../assets/departmentIcons/Ophthalmology.png'
import Trauma from '../assets/departmentIcons/Trauma.png'
import Pharmacy from '../assets/departmentIcons/Pharmacy.png'
import Physiotherapy from '../assets/departmentIcons/Physiotherapy.png'
import Psychiatry from '../assets/departmentIcons/Psychiatry.png'
import Respiratory from '../assets/departmentIcons/Respiratory.png'
import Urology from '../assets/departmentIcons/Urology.png'
import Cosmetology from '../assets/departmentIcons/Cosmetology.png'

const departments = [
  {
    title: "Cardiology",
    Icon : Cardiology,
  },
  {
    title: "Neurology",
    Icon : Neurology,
  },
  {
    title: "Orthopedics",
    Icon : Orthopedics,
  },
  {
    title: "Pediatrics",
    Icon : Pediatrics,
  },
  {
    title: "Maternity",
    Icon : Maternity,
  },
  {
    title: "Anesthesiology",
    Icon : Anesthesia,
  },
  {
    title: "Ayurveda",
    Icon : Ayurveda,
  },
  {
    title: "Blood Bank",
    Icon : BloodBank,
  },
  {
    title: "Critical Care",
    Icon : CriticalCare,
  },
  {
    title: "Dental Clinical",
    Icon : DentalClinical,
  },
  {
    title: "Dermatology & Cosmetology",
    Icon : Cosmetology,
  },
  {
    title: "ENT",
    Icon : EarAche,
  },
  {
    title: "Emergency Medicine",
    Icon : EmergencyMedicine,
  },
  {
    title: "Endocrinology",
    Icon : Endocrinology,
  },
  {
    title: "Gastroenterology",
    Icon : Gastroenterology,
  },
  {
    title: "General Medicine",
    Icon : GeneralMedicine,
  },
  {
    title: "General Surgery",
    Icon : Surgery,
  },
  {
    title: "Homeopathy",
    Icon : Homeopathy,
  },
  {
    title: "Imaging & Radiology",
    Icon : Radiology,
  },
  {
    title: "Laboratory",
    Icon : Laboratory,
  },
  {
    title: "Naturopathy",
    Icon : Naturopathy,
  },
  {
    title: "Nephrology",
    Icon : Nephrology,
  },
  {
    title: "Nutrition & Dietetics",
    Icon : Nutrition,
  },
  {
    title: "Obstetrics & Gynecology",
    Icon : Gynecology,
  },
  {
    title: "Ophthalmology",
    Icon : Ophthalmology,
  },
  {
    title: "Orthopedics & Trauma",
    Icon : Trauma,
  },
  {
    title: "Pharmacy",
    Icon : Pharmacy,
  },
  {
    title: "Physiotherapy",
    Icon : Physiotherapy,
  },
  {
    title: "Psychiatry & Behavioral Medicine",
    Icon : Psychiatry,
  },
  {
    title: "Respiratory Medicine",
    Icon : Respiratory,
  },
  {
    title: "Urology",
    Icon : Urology,
  }
];


const Menu = () => {
  return (
    <div className="bg-white hidden md:block rounded-lg overflow-hidden">
      <h2 className='text-xl font-semibold flex justify-center mb-2'>Our Deparments</h2>
      <div className="menu-content grid grid-cols-4 p-4">
        {departments.map((dept, index) => (
          <DepartmentMenu key={index} title={dept.title} Icon = {dept.Icon}/>
        ))}
      </div>
    </div>
  );
};

const DepartmentMenu = ({ title, Icon }) => {
  return (
    <motion.div 
    >
      <div className='flex items-center gap-1 m-2'>
      <img src={Icon} className='w-6 mr-1'/>
      <p className="menu-text_para">{title}</p>
      </div>
    </motion.div>
  );
};

export default Menu;
