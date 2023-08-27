import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  // owner, title, description, target, deadline, amountCollected, image, handleClick
  // Static campaign data
  const staticCampaigns = [
    {
      owner: 'abc',
      title: 'Food Donation Campaign',
      description: 'Donating food to local charity',
      amountCollected: 0,
      target: 2000,
      deadline: 23,
      image:
        'https://img.freepik.com/premium-vector/donation-boxes-with-canned-food-illustration-freshly-prepared-food-packaged-sealed-jars-helping-people-need-poor-people-giving-out-charities-saving-from-hunger-vector-kindness_146957-1033.jpg?w=1380',
    },
    {
      owner: 'abc',
      title: 'Clothes Donation Campaign',
      description: 'Donating clothes to local charity',
      amountCollected: 0,
      target: 500,
      deadline: 1,
      image:
        'https://img.pikbest.com/element_our/20221231/bg/3b4ab970106c9.png!w700wp',
    },
    {
      owner: 'def',
      title: 'Education Support Fund',
      description: 'Providing educational resources to underprivileged children',
      amountCollected: 350,
      target: 1000,
      deadline: 15,
      image:
        'https://w7.pngwing.com/pngs/275/188/png-transparent-education-school-icon-children-education-infographic-child-text-thumbnail.png',
    },
    {
      owner: 'ghi',
      title: 'Clean Water Initiative',
      description: 'Providing clean and safe drinking water to rural communities',
      amountCollected: 800,
      target: 1500,
      deadline: 10,
      image:
        'https://image.freepik.com/free-vector/world-water-day-concept_23-2148544896.jpg',
    },
    {
      owner: 'jkl',
      title: 'Animal Shelter Renovation',
      description: 'Renovating an animal shelter to improve living conditions',
      amountCollected: 2500,
      target: 3000,
      deadline: 7,
      image:
        'https://image.freepik.com/free-vector/happy-animals-shelter-concept_23-2148564903.jpg',
    },
    {
      owner: 'mno',
      title: 'Community Garden Project',
      description: 'Creating a communal garden for sustainable food production',
      amountCollected: 1200,
      target: 2500,
      deadline: 14,
      image:
        'https://image.freepik.com/free-vector/community-garden-planting_74855-5126.jpg',
    },
    {
      owner: 'pqr',
      title: 'Healthcare Outreach Program',
      description: 'Providing medical care and vaccinations to remote areas',
      amountCollected: 600,
      target: 800,
      deadline: 5,
      image:
        'https://image.freepik.com/free-vector/healthcare-outreach-program_23-2148561232.jpg',
    }]  

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length + staticCampaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}

        {!isLoading && campaigns.length === 0 && staticCampaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet.
          </p>
        )}

        {/* Display fetched campaigns */}
        {!isLoading &&
          campaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}

        {/* Display static campaigns */}
        {staticCampaigns.map((campaign) => (
          <FundCard
            key={uuidv4()}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
