import React from 'react';
import { Shield, Lock, Search, Globe, Database, Book, Briefcase, Activity, AlertCircle, Cpu, Cloud, Link } from 'lucide-react';
import { Service, Industry, BlogPost, JobPosition } from './types';

export const LOGO_URL = 'https://skywavehost.com/wp-content/uploads/2025/12/eaglelogo-scaled.png';

export const SERVICES_DATA: Service[] = [
  {
    id: 'consulting',
    title: 'Cybersecurity Consulting & Advisory',
    description: 'Expert strategic guidance to align security programs with business goals.',
    icon: 'Shield',
    outcomes: ['Strategic Roadmap', 'Risk Posture Report', 'Executive Alignment'],
    compliance: ['ISO 27001', 'NIST CSF']
  },
  {
    id: 'network-security',
    title: 'Network, Systems & Application Security',
    description: 'Hardening multi-layer environments against sophisticated lateral threats.',
    icon: 'Lock',
    outcomes: ['Zero-Trust Implementation', 'Traffic Analysis', 'Hardened Infrastructure'],
    compliance: ['SOC2', 'PCI-DSS']
  },
  {
    id: 'data-protection',
    title: 'Enterprise Data Management & Protection',
    description: 'Encapsulating critical data assets with high-fidelity encryption and access control.',
    icon: 'Database',
    outcomes: ['Data Loss Prevention', 'Sensitive Data Discovery', 'Cloud Encryption'],
    compliance: ['GDPR', 'CCPA']
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring & Managed Security',
    description: '24/7/365 vigilance across global networks to detect and neutralize threats.',
    icon: 'Activity',
    outcomes: ['Real-time Response', 'SIEM Management', 'SOC Operations'],
    compliance: ['NIST 800-171', 'CMMC']
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability & Configuration Management',
    description: 'Proactive identifying and patching of security gaps before exploitation.',
    icon: 'AlertCircle',
    outcomes: ['Automated Scanning', 'Configuration Audits', 'Patch Prioritization'],
  },
  {
    id: 'zero-trust',
    title: 'Zero Trust Architecture (ZTA)',
    description: 'Moving from perimeter-based security to identity-driven micro-segmentation.',
    icon: 'Cpu',
    outcomes: ['Least Privilege Access', 'Dynamic Policy Control', 'Identity Verification'],
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'govt',
    name: 'Government & Defense',
    description: 'Supporting Federal, State, and Local agencies with mission-critical security that exceeds NIST and FISMA requirements.',
    primaryThreats: ['APT defense', 'Cross-agency collaboration', 'RMF compliance'],
    coreSolutions: ['Classified network security', 'Secure Supply Chain', 'Continuous Monitoring']
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Protecting the global financial engine with multi-layered defenses for banking, accounting, and insurance firms.',
    primaryThreats: ['Fraud detection', 'Data privacy (PCI-DSS)', 'System availability'],
    coreSolutions: ['Encryption architecture', 'DLP for transactions', 'DDoS resilience']
  },
  {
    id: 'enterprise',
    name: 'Large & Small Business',
    description: 'Enabling digital transformation without compromising the integrity of global business operations.',
    primaryThreats: ['Edge security', 'BYOD management', 'SaaS sprawl'],
    coreSolutions: ['Zero Trust Architecture', 'Managed Security Services', 'IAM Overhaul']
  },
  {
    id: 'education',
    name: 'Higher Education',
    description: 'Securing academic research and student data in open, collaborative university environments.',
    primaryThreats: ['Research IP theft', 'Diverse user base', 'Open networks'],
    coreSolutions: ['Network segmentation', 'EDR deployment', 'Vulnerability management']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Zero Trust in Hybrid Environments',
    excerpt: 'How enterprises are navigating the transition from legacy VPNs to modern identity-based perimeters based on NIST SP 800-207.',
    content: `The paradigm of the 'castle and moat' security model is dead...`,
    author: 'Elena Vance',
    date: 'Oct 24, 2024',
    category: 'Cyber Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Post-Quantum Cryptography: Preparing for Tomorrow',
    excerpt: 'Why current RSA and ECC encryption standards are vulnerable and how EagleEye is implementing quantum-resistant protocols.',
    content: `The 'harvest now, decrypt later' threat is real...`,
    author: 'Dr. Marcus Thorne',
    date: 'Oct 15, 2024',
    category: 'Research',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Ransomware 3.0: The Rise of Double-Extortion',
    excerpt: 'Analyzing the shift from simple encryption to complex data exfiltration and third-party pressure tactics.',
    content: `The ransomware landscape has evolved from simple 'lock-and-key' extortion to a multi-stage criminal business model...`,
    author: 'Sarah Chen',
    date: 'Sep 30, 2024',
    category: 'Threat Intel',
    imageUrl: 'https://skywavehost.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-23-2025-08_27_09-AM.jpg'
  }
];

export const JOB_OPENINGS: JobPosition[] = [
  {
    id: 'j1',
    title: 'Senior Security Architect',
    department: 'Engineering',
    location: 'Remote / Arlington, VA',
    type: 'Full-time',
    description: 'Design and implement complex security architectures for federal clients...'
  },
  {
    id: 'j2',
    title: 'Incident Response Lead',
    department: 'Operations',
    location: 'Cyber Command Center',
    type: 'Full-time',
    description: 'Lead rapid-response teams during high-impact security breaches...'
  },
  {
    id: 'j3',
    title: 'Offensive Security / Penetration Tester',
    department: 'Engineering',
    location: 'Hybrid / Lanham, MD',
    type: 'Full-time',
    description: 'Execute advanced persistent threat (APT) simulations...'
  },
  {
    id: 'j4',
    title: 'Cloud Security Sentinel',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Orchestrate secure landing zones...'
  },
  {
    id: 'j5',
    title: 'GRC Strategic Analyst',
    department: 'Compliance',
    location: 'Arlington, VA',
    type: 'Full-time',
    description: 'Navigate complex regulatory frameworks...'
  },
  {
    id: 'j6',
    title: 'Tier II SOC Analyst',
    department: 'Operations',
    location: 'Cyber Command Center',
    type: 'Full-time',
    description: 'Monitor global traffic patterns...'
  },
  {
    id: 'j7',
    title: 'DevSecOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop custom defensive tooling...'
  }
];