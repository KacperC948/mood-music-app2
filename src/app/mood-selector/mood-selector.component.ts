import { Component } from '@angular/core';
import { OpenAiService } from '../openai.service';

@Component({
  selector: 'app-mood-selector',
  templateUrl: './mood-selector.component.html',
  styleUrls: ['./mood-selector.component.css']
})
export class MoodSelectorComponent {
  apiKey: string = '';
  moodInput: string = '';
  moods: string[] = ['Szczęśliwy', 'Smutny', 'Zrelaksowany', 'Zestresowany'];
  recommendedSongs: string[] = [];  // <-- Lista rekomendowanych piosenek
  loading: boolean = false;  // <-- Flaga ładowania

  constructor(private openAiService: OpenAiService) {}

  selectMood(mood: string) {
    this.moodInput = mood;
  }

  submitMood() {
    if (this.moodInput.length > 0 && this.apiKey) {
      this.loading = true;  // Ustawienie flagi ładowania
      this.recommendedSongs = [];  // Wyczyść listę piosenek

      this.openAiService.getSongsForMood(this.moodInput, this.apiKey).subscribe(
        (response: any) => {
          // Obsłuż odpowiedź API OpenAI
          const aiResponse = response.choices[0].message.content;
          this.recommendedSongs = aiResponse.split('\n').filter((song: any) => song);  // Dzielimy odpowiedź na linie
          this.loading = false;  // Wyłącz flagę ładowania
        },
        (error) => {
          console.error('Błąd podczas pobierania rekomendacji piosenek:', error);
          this.loading = false;  // Wyłącz flagę ładowania, nawet przy błędzie
        }
      );
    }
  }
}
