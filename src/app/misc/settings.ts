import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Settings {
  variants = [
    {
      title: 'Player type:',
      key: 'type' as const,
      variants: [
        { title: 'MSE', value: 'mse' as const, selected: true, disabled: false },
        { title: 'WebOS', value: 'webos' as const, selected: false, disabled: false },
      ]
    },
    {
      title: 'DRM type:',
      key: 'drm' as const,
      variants: [
        { title: 'PlayReady', value: 'playready' as const, selected: true, disabled: false },
        { title: 'Widevine', value: 'widevine' as const, selected: false, disabled: false },
      ]
    },
  ];
  result: { type: 'mse' | 'webos', drm: 'playready' | 'widevine' } = { type: 'mse', drm: 'playready' };
  select(v: typeof this.variants[number], b: typeof this.variants[number]['variants'][number]) {
    v.variants.forEach((b) => b.selected = false);
    b.selected = true;
    if (b.value === 'webos') {
      Object.assign(this.variants[1].variants[1], { selected: false, disabled: true });
      this.variants[1].variants[0].selected = true;
    } else if (b.value === 'mse') {
      this.variants[1].variants[1].disabled = false;
    }
    this.result = {} as any;
    this.variants.forEach((v) => v.variants.forEach((b) => {
      if (b.selected) {
        // @ts-ignore
        this.result[v.key] = b.value;
      }
    }));
  }
}
