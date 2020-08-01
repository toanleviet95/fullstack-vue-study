import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
  state: {
    seedData,
    numbers: [1, 2, 3],
  },
  getActiveDay () {
    return this.state.seedData.find(day => day.active);
  },
  setActiveDay (dayId) {
    this.state.seedData.map(day => {
      day.active = day.id === dayId
    });
  },
  getEventObj (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    return dayObj.events.find(event => event.details === eventDetails);
  },
  submitEvent (eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },
  editEvent (dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  updateEvent (dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },
  deleteEvent (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails);
    dayObj.events.splice(eventIndexToRemove, 1);
  },
  resetEditOfAllEvents () {
    this.state.seedData.map(day => {
      day.events.map(event => {
        event.edit = false;
      });
    });
  }
}
