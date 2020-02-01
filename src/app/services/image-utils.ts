export class ImageUtils {

    static getImagePath(code: number, resolution: Resolution) {
        let defaultPath = "../../../assets/assets/weathet-conditions/default_";

        switch (Math.floor(code / 100)) {
            case 2:
                return this.makeImagePath("../../../assets/weathet-conditions/group_2xx_", resolution);
            case 3:
                return this.makeImagePath("../../../assets/weathet-conditions/group_3xx_", resolution);
            case 5: {
                if (code === 511) return this.makeImagePath("../../../assets/weathet-conditions/5xx/freezing_rain_", resolution);
                else if (code <= 504) return this.makeImagePath("../../../assets/weathet-conditions/5xx/light-exteme_rain", resolution);
                else return this.makeImagePath("../../../assets/weathet-conditions/5xx/light_intensity-ragged_shower", resolution);
            }
            case 6: return this.makeImagePath("../../../assets/weathet-conditions/group_6xx_", resolution);
            case 7: return this.makeImagePath("../../../assets/weathet-conditions/group_7xx_", resolution);
            case 8: {
                if (code === 800) return this.makeImagePath("../../../assets/weathet-conditions/8xx/clear_sky", resolution);
                else if (code === 802) return this.makeImagePath("../../../assets/weathet-conditions/8xx/scattered_clouds", resolution);
                else if (code === 801) return this.makeImagePath("../../../assets/weathet-conditions/8xx/few_clouds", resolution);
                else return this.makeImagePath("../../../assets/weathet-conditions/8xx/overcast_clouds", resolution);
            }
            default: return this.makeImagePath(defaultPath, resolution);
        }
    }

    private static makeImagePath(relativePath: string, resolution: Resolution) {
        return relativePath.concat(resolution).concat('.png');
    }
}


export enum Resolution {
    Mini = '64x64',
    Large = '96x96'
}