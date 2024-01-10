import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarName',
  standalone: true,
})
export class AvatarNamePipe implements PipeTransform {
  transform(value: string | null): string | null {
    // only transform name containing space ' '
    if (value && value.includes(' ')) {
      const [firstWord, secondWord] = value.split(' ');
      // only transform first and second part of the name if it has more than one space
      return [firstWord, secondWord]
        .map((c) => c.split('')[0].toUpperCase())
        .join('');
    }

    return value ? value.split('')[0].toUpperCase() : '';
  }
}
