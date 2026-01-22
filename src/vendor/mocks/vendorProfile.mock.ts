import type { Vendor } from '../types/vendor';
import type { User } from '../types/user';

/**
 * Mock Vendor Profile Data
 * Sample vendor: Kumar Cement Suppliers in Miyapur, Hyderabad
 */
export const mockVendorProfile: Vendor = {
  // Identity
  id: 'vendor_01HQKZX8Y9Z1A2B3C4D5E6F7G8',
  businessName: 'Kumar Cement Suppliers',
  ownerName: 'Rajesh Kumar',
  phone: '+919876543210',
  email: 'rajesh.kumar@example.com',
  
  // Service
  businessLocation: 'Miyapur', // Primary business location
  serviceAreas: ['Miyapur', 'Kukatpally', 'KPHB'],
  isAvailable: true,
  
  // KYC
  kycStatus: 'verified',
  kycDocuments: [
    {
      type: 'aadhaar',
      number: 'XXXX XXXX 4567',
      verified: true,
      verifiedAt: '2025-11-15T10:30:00Z',
      verifiedBy: 'ops_user_001',
    },
    {
      type: 'pan',
      number: 'XXXXX1234X',
      verified: true,
      verifiedAt: '2025-11-15T10:30:00Z',
      verifiedBy: 'ops_user_001',
    },
  ],
  
  // Banking
  bankDetails: {
    accountHolderName: 'Rajesh Kumar',
    accountNumber: 'XXXXXX1234',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    verified: true,
    verifiedAt: '2025-11-16T14:20:00Z',
  },
  
  // Metadata
  createdAt: '2025-11-15T09:00:00Z',
  lastActiveAt: '2026-01-08T08:45:00Z',
  onboardingCompletedAt: '2025-11-20T16:00:00Z',
};

/**
 * Additional vendor for testing multi-vendor scenarios
 */
export const mockVendorProfile2: Vendor = {
  id: 'vendor_02HQKZX8Y9Z1A2B3C4D5E6F7G9',
  businessName: 'Sharma Building Materials',
  ownerName: 'Amit Sharma',
  phone: '+919123456789',
  email: 'amit.sharma@example.com',
  
  businessLocation: 'Gachibowli', // Primary business location
  serviceAreas: ['Gachibowli', 'Madhapur'],
  isAvailable: false, // Currently unavailable
  
  kycStatus: 'verified',
  kycDocuments: [
    {
      type: 'aadhaar',
      number: 'XXXX XXXX 8901',
      verified: true,
      verifiedAt: '2025-12-01T11:00:00Z',
      verifiedBy: 'ops_user_002',
    },
  ],
  
  bankDetails: {
    accountHolderName: 'Amit Sharma',
    accountNumber: 'XXXXXX5678',
    ifscCode: 'ICIC0001234',
    bankName: 'ICICI Bank',
    verified: true,
    verifiedAt: '2025-12-02T10:30:00Z',
  },
  
  createdAt: '2025-12-01T10:00:00Z',
  lastActiveAt: '2026-01-07T15:20:00Z',
  onboardingCompletedAt: '2025-12-05T17:30:00Z',
};

/**
 * Third vendor owned by the same user (Rajesh Kumar)
 * Demonstrates multi-vendor ownership
 */
export const mockVendorProfile3: Vendor = {
  id: 'vendor_03HQKZX8Y9Z1A2B3C4D5E6F7H0',
  businessName: 'RK Steel & Hardware',
  ownerName: 'Rajesh Kumar',
  phone: '+919876543210',
  email: 'rajesh.kumar@example.com',
  
  businessLocation: 'Bachupally', // Primary business location
  serviceAreas: ['Bachupally', 'Nizampet', 'Pragathi Nagar'],
  isAvailable: true,
  
  kycStatus: 'verified',
  kycDocuments: [
    {
      type: 'aadhaar',
      number: 'XXXX XXXX 4567',
      verified: true,
      verifiedAt: '2025-11-15T10:30:00Z',
      verifiedBy: 'ops_user_001',
    },
    {
      type: 'pan',
      number: 'XXXXX1234X',
      verified: true,
      verifiedAt: '2025-11-15T10:30:00Z',
      verifiedBy: 'ops_user_001',
    },
  ],
  
  bankDetails: {
    accountHolderName: 'Rajesh Kumar',
    accountNumber: 'XXXXXX9876',
    ifscCode: 'SBIN0001234',
    bankName: 'State Bank of India',
    verified: true,
    verifiedAt: '2025-11-22T09:15:00Z',
  },
  
  createdAt: '2025-11-22T08:00:00Z',
  lastActiveAt: '2026-01-08T09:30:00Z',
  onboardingCompletedAt: '2025-11-25T14:00:00Z',
};

/**
 * Mock User Data
 * User can own/manage multiple vendor entities
 */
export const mockUser: User = {
  id: 'user_01HQKZX8Y9Z1A2B3C4D5E6F7G8',
  name: 'Rajesh Kumar',
  phone: '+919876543210',
  email: 'rajesh.kumar@example.com',
  
  // This user owns/manages multiple vendors
  vendorIds: [
    'vendor_01HQKZX8Y9Z1A2B3C4D5E6F7G8', // Kumar Cement Suppliers
    'vendor_03HQKZX8Y9Z1A2B3C4D5E6F7H0', // RK Steel & Hardware
  ],
  
  createdAt: '2025-11-15T09:00:00Z',
  lastLoginAt: '2026-01-08T08:45:00Z',
};

/**
 * Helper: Get all vendors for a user
 */
export const getAllVendorsForUser = (userId: string): Vendor[] => {
  // In real app, this would be an API call
  // For mock, return vendors owned by the mock user
  if (userId === mockUser.id) {
    return [mockVendorProfile, mockVendorProfile3];
  }
  return [];
};

/**
 * Helper: Get vendor by ID
 */
export const getVendorById = (vendorId: string): Vendor | null => {
  const vendors = [mockVendorProfile, mockVendorProfile2, mockVendorProfile3];
  return vendors.find(v => v.id === vendorId) || null;
};