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
      owner:'abc',
      title: 'Food donation campaign',
      description: 'Donating food to local charity',
      amountCollected: 0,
      goalAmount: 2000,
      deadline:23,
      image:'https://img.freepik.com/premium-vector/donation-boxes-with-canned-food-illustration-freshly-prepared-food-packaged-sealed-jars-helping-people-need-poor-people-giving-out-charities-saving-from-hunger-vector-kindness_146957-1033.jpg?w=1380'
    },
    {
      owner:'abc',
      title: 'Clothes donation campaign',
      description: 'Donating clothes to local charity',
      amountCollected: 0,
      goalAmount: 0,
      deadline:1,
      image:'https://img.pikbest.com/element_our/20221231/bg/3b4ab970106c9.png!w700wp'
    },
  ];

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
