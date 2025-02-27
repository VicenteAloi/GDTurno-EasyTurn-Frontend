import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-appointment-scheduler',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './appointments-scheduler.component.html',
  styleUrls: ['./appointments-scheduler.component.css']
})
export class AppointmentSchedulerComponent {
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  now = new Date();
  currentMonth: Date = new Date(2024, 11); // December 2024
  weekDays: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  calendarDays: CalendarDay[] = [];
  timeSlots: string[] = [
    '08:00','08:30','09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  constructor() {
    this.generateCalendarDays();
  }

  generateCalendarDays(): void {
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    
    // Previous month days
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      this.calendarDays.push({
        date: new Date(firstDay.getFullYear(), firstDay.getMonth(), -i).getDate(),
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.calendarDays.push({
        date: i,
        isCurrentMonth: true
      });
    }

    // Next month days
    const remainingDays = 42 - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push({
        date: i,
        isCurrentMonth: false
      });
    }
  }

  previousMonth(): void {
    if(this.currentMonth >= this.now){
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
      this.calendarDays = [];
      this.generateCalendarDays();
    }
  
  }

  nextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    this.calendarDays = [];
    this.generateCalendarDays();
    this.selectDate()
  }

  selectDate(day?: CalendarDay): void {
    if (day?.isCurrentMonth) {
      this.selectedDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), day.date);
    }
  }

  selectTime(time: string): void {
    this.selectedTime = time;
  }

  getMonthYearString(): string {
    return this.currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

    
}

