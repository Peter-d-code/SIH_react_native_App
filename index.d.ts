const audioSet: AudioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVModeIOS: AVModeIOSOption.measurement,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };
  const meteringEnabled = false;
  
  const uri = await this.audioRecorderPlayer.startRecorder(
    path,
    audioSet,
    meteringEnabled,
  );
  
  this.audioRecorderPlayer.addRecordBackListener((e: any) => {
    this.setState({
      recordSecs: e.currentPosition,
      recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
    });
  });


export type PuzzlePiece = number;

export type PuzzlePieces = readonly PuzzlePiece[];

export enum MoveDirection {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export type PicturePuzzleProps = ImageProps & {
  readonly hidden: number | null;
  readonly size: number;
  readonly pieces: PuzzlePieces;
  readonly source: ImageURISource | number;
  readonly renderLoading?: () => JSX.Element;
  readonly onChange?: (nextPieces: PuzzlePieces, nextHidden: number | null) => void;
};