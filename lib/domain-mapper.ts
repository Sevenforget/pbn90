// 도메인 매핑 데이터 타입
interface DomainMapping {
  origin: string;
  domain: string;
  routePattern?: string;
}

// 이 프로젝트(pbn10)의 도메인 정보를 하드코딩
const PROJECT_DOMAIN = "https://bizhandshake.com";
const PROJECT_NAME = "pbn10";

// 하드코딩된 도메인 매핑 데이터 (기존 pbn-domains.json의 내용을 여기에 하드코딩)
const DOMAIN_MAPPINGS: DomainMapping[] = [
  { origin: "pbn1", domain: "https://example1.com" },
  { origin: "pbn2", domain: "https://example2.com" },
  // 필요한 다른 도메인 매핑 추가
];

/**
 * 프로젝트 이름(origin)으로 도메인을 조회하는 함수
 * @param origin 프로젝트 이름 (예: "pbn1", "pbn2")
 * @returns 해당 도메인 문자열 또는 null
 */
export function getDomainByOrigin(origin: string): string | null {
  // 현재 프로젝트인 경우 하드코딩된 값을 반환
  if (origin === PROJECT_NAME) {
    return PROJECT_DOMAIN;
  }

  const mapping = DOMAIN_MAPPINGS.find((item) => item.origin === origin);
  return mapping ? mapping.domain : null;
}

/**
 * 현재 프로젝트의 도메인을 자동으로 감지하는 함수
 * @returns 현재 프로젝트의 도메인
 */
export function getCurrentProjectDomain(): string {
  // 항상 현재 프로젝트의 하드코딩된 도메인 값을 반환
  return PROJECT_DOMAIN;
}

/**
 * 프로젝트 이름으로 도메인을 조회하되, 없으면 기본값을 반환
 * @param origin 프로젝트 이름
 * @param defaultDomain 기본 도메인 (선택사항)
 * @returns 도메인 문자열
 */
export function getDomainWithFallback(
  origin: string,
  defaultDomain = PROJECT_DOMAIN
): string {
  // 현재 프로젝트인 경우 하드코딩된 값을 반환
  if (origin === PROJECT_NAME) {
    return PROJECT_DOMAIN;
  }

  const domain = getDomainByOrigin(origin);
  return domain || defaultDomain;
}

/**
 * 모든 도메인 매핑 정보를 반환하는 함수 (디버깅용)
 * @returns 전체 도메인 매핑 배열
 */
export function getAllDomainMappings(): DomainMapping[] {
  return [...DOMAIN_MAPPINGS];
}
