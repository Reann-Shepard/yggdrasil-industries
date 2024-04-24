"use client";

import { useState } from "react";
import questData from "./quests.json";

const Quest = () => {
  // Load the quests from the JSON file
  const [quest, setQuests] = useState(questData);

  // Check if the quests are empty, if it is, return a message saying "No quests available"
  // If the quests are not empty, map through the quests and display them
  // If a quest is marked as ongoing, display it as an ongoing quest
  // If a quest is marked as completed, display it as a completed quest
  // Be sure to check if there is a quest available in each case before displaying it
  const renderQuests = (input) => {
    // Check if there are any ongoing quests by counting the number of quests that are ongoing
    let ongoingQuests = quest.filter((quest) => quest.status === "ongoing");
    // Check if there are any completed quests by counting the number of quests that are completed
    let completedQuests = quest.filter((quest) => quest.status === "completed");
    // If there are no quests available, return a message saying "No quests available"
    if (ongoingQuests.length === 0 && input === "ongoing") {
      return <p>No ongoing quests available</p>;
    } else if (completedQuests.length === 0 && input === "completed") {
      return <p>No completed quests available</p>;
    }
    // Now we check if the status of the quest is ongoing or completed
    // Use the index of the quest as the key
    else if (ongoingQuests.length > 0 && input === "ongoing") {
      return ongoingQuests.map((quest, index) => (
        <div
          key={index}
          className="daisy-collapse daisy-collapse-arrow border border-accent bg-base-100"
        >
          <input
            type="radio"
            name="questsOngoing"
            defaultChecked={index === 0 ? true : false}
          />
          <div className="daisy-collapse-title text-xl font-medium text-secondary">
            {quest.title}
          </div>
          <div className="daisy-collapse-content text-justify">
            <p>{quest.body}</p>
          </div>
        </div>
      ));
    } else if (completedQuests.length > 0 && input === "completed") {
      return completedQuests.map((quest, index) => (
        <div
          key={index}
          className="daisy-collapse daisy-collapse-arrow border border-accent bg-base-100"
        >
          <input type="radio" name="questsCompleted" />
          <div className="daisy-collapse-title text-xl font-medium text-secondary">
            {quest.title}
          </div>
          <div className="daisy-collapse-content text-justify">
            <p>{quest.body}</p>
          </div>
        </div>
      ));
    }
  };

  // Return the quests
  return (
    <div>
      <h2 className="text-2xl p-2 text-primary">Ongoing Quests</h2>
      {renderQuests("ongoing")}
      <h2 className="text-2xl pt-4 pb-2 text-primary">Completed Quests</h2>
      {renderQuests("completed")}
    </div>
  );
};

export default Quest;
