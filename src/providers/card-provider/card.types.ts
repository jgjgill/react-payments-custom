export type Card = {
  키: string;
  번호: number;
  만료일: { 월: number; 년: number };
  보안코드: number;
  비밀번호: number;
  소유자_이름: string;
  별칭: string;
};
